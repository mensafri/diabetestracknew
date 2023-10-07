<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PerawatController extends Controller
{
    public function index()
    {
        return Inertia::render('Perawat/IndexPerawat');
    }
}
