<?php

namespace App\Http\Controllers;

use App\Models\Diet;
use App\Models\GulaDarah;
use App\Models\Obat;
use App\Models\Olahraga;
use App\Models\Pasien;
use App\Models\Saran;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class PasienController extends Controller
{
    public function index()
    {
        $pasien_id = Auth::user()->id;
        $pasien = Pasien::where('users_id', $pasien_id)->get();
        $id_pasien = Pasien::where('users_id', $pasien_id)->pluck('id');
        $saran = Saran::select('teks')->where('pasien_id', $id_pasien[0])->first();
        return Inertia::render('Pasien/IndexPasien', ['pasien' => $pasien, 'saran' => $saran]);
    }
    public function olahraga()
    {
        return Inertia::render('Pasien/Olahraga');
    }
    public function createOlahraga(Request $request)
    {
        DB::beginTransaction();
        try {
            $request->validate([
                'waktu' => 'required|string|max:255',
                'jenis_olahraga' => 'required|string|max:255|',
                'foto' => 'required|string',
                'pasien_id' => 'required'
            ]);

            Olahraga::create([
                'waktu' => $request->waktu,
                'jenis_olahraga' => $request->jenis_olahraga,
                'foto' => $request->foto,
                'pasien_id' => $request->pasien_id,
            ]);
            DB::commit();
            return redirect(RouteServiceProvider::PASIEN);
        } catch (\Throwable $th) {
            DB::rollBack();
            throw $th;
        }
    }
    public function diet()
    {
        return Inertia::render('Pasien/Diet');
    }
    public function createDiet(Request $request)
    {
        DB::beginTransaction();
        try {
            $request->validate([
                'waktu' => 'required|string|max:255',
                'porsi' => 'required|string|max:255',
                'jenis_makanan' => 'required|string|max:255|',
                'foto' => 'required|string',
                'pasien_id' => 'required'
            ]);

            Diet::create([
                'waktu' => $request->waktu,
                'porsi' => $request->porsi,
                'jenis_makanan' => $request->jenis_makanan,
                'foto' => $request->foto,
                'pasien_id' => $request->pasien_id,
            ]);
            DB::commit();
            return redirect(RouteServiceProvider::PASIEN);
        } catch (\Throwable $th) {
            DB::rollBack();
            throw $th;
        }
    }
    public function obat()
    {
        return Inertia::render('Pasien/Obat');
    }
    public function createObat(Request $request)
    {
        DB::beginTransaction();
        try {
            $request->validate([
                'waktu' => 'required|string|max:255',
                'dosis' => 'required|string|max:255',
                'jenis_obat' => 'required|string|max:255|',
                'foto' => 'required|string',
                'pasien_id' => 'required'
            ]);

            Obat::create([
                'waktu' => $request->waktu,
                'dosis' => $request->dosis,
                'jenis_obat' => $request->jenis_obat,
                'foto' => $request->foto,
                'pasien_id' => $request->pasien_id,
            ]);
            DB::commit();
            return redirect(RouteServiceProvider::PASIEN);
        } catch (\Throwable $th) {
            DB::rollBack();
            throw $th;
        }
    }
    public function gulaDarah(Request $request)
    {
        return Inertia::render('Pasien/GulaDarah');
    }
    public function createGulaDarah(Request $request)
    {
        DB::beginTransaction();
        try {
            $request->validate([
                'hasil' => 'required',
                'foto' => 'required|string',
                'pasien_id' => 'required'
            ]);

            GulaDarah::create([
                'hasil' => $request->hasil,
                'foto' => $request->foto,
                'pasien_id' => $request->pasien_id,
            ]);
            DB::commit();
            return redirect(RouteServiceProvider::PASIEN);
        } catch (\Throwable $th) {
            DB::rollBack();
            throw $th;
        }
    }
}
