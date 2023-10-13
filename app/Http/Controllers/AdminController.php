<?php

namespace App\Http\Controllers;

use App\Models\Dokter;
use App\Models\Pasien;
use App\Models\Perawat;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/IndexAdmin');
    }
    public function create(Request $request): RedirectResponse
    {
        $request->validate([
            'full_name' => 'required|string|max:255',
            'username' => 'required|string|max:255|unique:' . User::class,
            'role' => 'required|string',
            'email' => 'string|email|max:255|unique:' . User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'full_name' => $request->full_name,
            'username' => $request->username,
            'role' => $request->role,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        if ($request->role === 'Dokter') {
            Dokter::create([
                'users_id' => $user['id']
            ]);
        } elseif ($request->role === 'Perawat') {
            Perawat::create([
                'users_id' => $user['id']
            ]);
        }

        event(new Registered($user));

        return redirect(RouteServiceProvider::HOME);
    }
    public function listDokter()
    {
        $list_dokter = Dokter::all();
        return Inertia::render('Admin/Dokters', ['list_dokter' => $list_dokter]);
    }
    public function listPerawat()
    {
        $list_perawat = Perawat::all();
        return Inertia::render('Admin/Perawats', ['list_perawat' => $list_perawat]);
    }
    public function listPasien()
    {
        $list_pasien = Pasien::all();
        return Inertia::render('Admin/Pasiens', ['list_pasien' => $list_pasien]);
    }
}
