<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PasienController extends Controller
{
    public function index()
    {
        return Inertia::render('Pasien/IndexPasien');
    }
    public function olahraga()
    {
        return Inertia::render('Pasien/Olahraga');
    }
    public function diet()
    {
        return Inertia::render('Pasien/Diet');
    }
    public function obat()
    {
        return Inertia::render('Pasien/Obat');
    }
    public function gulaDarah()
    {
        return Inertia::render('Pasien/GulaDarah');
    }
}
