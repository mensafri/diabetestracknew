<?php

namespace App\Http\Controllers;

use App\Models\Pasien;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DokterController extends Controller
{
    public function index()
    {
        $list_pasien = Pasien::all();
        return Inertia::render('Dokter/IndexDokter', ['list_pasien' => $list_pasien]);
    }
    public function detail()
    {
        return Inertia::render('Dokter/Detail');
    }
    public function saran()
    {
        return Inertia::render('Dokter/Saran');
    }
}
