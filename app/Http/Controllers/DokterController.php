<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DokterController extends Controller
{
    public function index()
    {
        return Inertia::render('Dokter/IndexDokter');
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
