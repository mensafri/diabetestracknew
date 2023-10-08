<?php

namespace App\Http\Controllers;

use App\Models\Dokter;
use App\Models\Pasien;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Illuminate\Validation\Rules;

class PerawatController extends Controller
{
    public function index()
    {
        $list_dokter = Dokter::all();
        return Inertia::render('Perawat/IndexPerawat', ['list_dokter' => $list_dokter]);
    }
    public function create(Request $request): RedirectResponse
    {
        DB::beginTransaction();
        try {
            $request->validate([
                'full_name' => 'required|string|max:255',
                'username' => 'required|string|max:255|unique:' . User::class,
                'role' => 'required|string',
                'email' => 'string|email|max:255|unique:' . User::class,
                'password' => ['required', 'confirmed', Rules\Password::defaults()],
                'id_dokter' => 'required'
            ]);

            $user = User::create([
                'full_name' => $request->full_name,
                'username' => $request->username,
                'role' => $request->role,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);

            Pasien::create([
                'users_id' => $user['id'],
                'dokter_id' => $request->id_dokter,
            ]);

            event(new Registered($user));
            DB::commit();
        } catch (\Throwable $th) {
            DB::rollBack();
            throw $th;
        }

        return redirect(RouteServiceProvider::PERAWAT);
    }
    public function list()
    {
        $list_pasien = Pasien::all();
        return Inertia::render('Perawat/Patients', ['list_pasien' => $list_pasien]);
    }
    public function detail()
    {
        return Inertia::render('Perawat/Detail');
    }
}
