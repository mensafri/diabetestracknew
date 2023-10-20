<?php

namespace App\Http\Controllers;

use App\Models\Diet;
use App\Models\GulaDarah;
use App\Models\Obat;
use App\Models\Olahraga;
use App\Models\Pasien;
use App\Models\Saran;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class DokterController extends Controller
{
    public function index()
    {
        $list_pasien = Pasien::all();
        return Inertia::render('Dokter/IndexDokter', ['list_pasien' => $list_pasien]);
    }
    public function detail(Pasien $pasien)
    {

        $olahraga = Olahraga::query()->where('pasien_id', $pasien->id)->first();
        $makanPagi = Diet::query()->where('pasien_id', $pasien->id)->where('waktu', 'Pagi')->first();
        $makanSore = Diet::query()->where('pasien_id', $pasien->id)->where('waktu', 'Sore')->first();
        $makanMalam = Diet::query()->where('pasien_id', $pasien->id)->where('waktu', 'Malam')->first();
        $obatPagi = Obat::query()->where('pasien_id', $pasien->id)->where('waktu', 'Pagi')->first();
        $obatSore = Obat::query()->where('pasien_id', $pasien->id)->where('waktu', 'Sore')->first();
        $obatMalam = Obat::query()->where('pasien_id', $pasien->id)->where('waktu', 'Malam')->first();
        $gulaDarah = GulaDarah::query()->where('pasien_id', $pasien->id)->first();


        $dataPasien = [
            'olahraga' => $olahraga,
            'makanPagi' => $makanPagi,
            'makanSore' => $makanSore,
            'makanMalam' => $makanMalam,
            'obatPagi' => $obatPagi,
            'obatSore' => $obatSore,
            'obatMalam' => $obatMalam,
            'gulaDarah' => $gulaDarah
        ];
        return Inertia::render('Dokter/Detail', [
            'pasien' => $pasien,
            'dataPasien' => $dataPasien
        ]);
    }
    public function saran()
    {
        return Inertia::render('Dokter/Saran', ['pasien' => Pasien::all()]);
    }
    public function createSaran(Request $request)
    {
        DB::beginTransaction();
        try {
            $request->validate([
                'teks' => 'required|string|max:255',
                'pasien' => 'required',
            ]);

            Saran::create([
                'teks' => $request->teks,
                'pasien_id' => $request->pasien,
            ]);

            DB::commit();
            return redirect(RouteServiceProvider::DOKTER);
        } catch (\Throwable $th) {
            DB::rollBack();
            throw $th;
        }
    }
}
