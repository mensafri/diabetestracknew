<?php

namespace App\Http\Controllers;

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
        return Inertia::render('Dokter/Detail');
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
