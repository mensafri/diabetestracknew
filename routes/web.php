<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\DokterController;
use App\Http\Controllers\PasienController;
use App\Http\Controllers\PerawatController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware('auth')->group(function () {
    Route::middleware('auth.role:Admin')->prefix('admin')->group(function () {
        Route::get('/', [AdminController::class, 'index'])->name('dashboard');
        Route::post('/create', [AdminController::class, 'create'])->name('admin.create');
        Route::get('/list-dokter', [AdminController::class, 'listDokter'])->name('admin.dokter');
        Route::get('/list-perawat', [AdminController::class, 'listPerawat'])->name('admin.perawat');
        Route::get('/list-pasien', [AdminController::class, 'listPasien'])->name('admin.pasien');
    });

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::middleware('auth.role:Dokter')->prefix('dokter')->group(function () {
        Route::get('/', [DokterController::class, 'index'])->name('dokter.index');
        Route::get('/detail/{pasien}', [DokterController::class, 'detail'])->name('dokter.detail');
        Route::get('/saran', [DokterController::class, 'saran'])->name('dokter.saran');
        Route::post('/saran/create', [DokterController::class, 'createSaran'])->name('dokter.createSaran');
    });


    Route::middleware('auth.role:Perawat')->prefix('perawat')->group(function () {
        Route::get('/', [PerawatController::class, 'index'])->name('perawat.index');
        Route::post('/create', [PerawatController::class, 'create'])->name('perawat.create');
        Route::get('/list-pasien', [PerawatController::class, 'list'])->name('perawat.list');
        Route::get('/detail/{pasien}', [PerawatController::class, 'detail'])->name('perawat.detail');
    });

    Route::middleware('auth.role:Pasien')->prefix('pasien')->group(function () {
        Route::get('/', [PasienController::class, 'index'])->name('pasien.index');
        Route::get('/olahraga', [PasienController::class, 'olahraga'])->name('pasien.olahraga');
        Route::post('/olahraga/create', [PasienController::class, 'createOlahraga'])->name('pasien.createOlahraga');
        Route::get('/diet', [PasienController::class, 'diet'])->name('pasien.diet');
        Route::post('/diet/create', [PasienController::class, 'createDiet'])->name('pasien.createDiet');
        Route::get('/obat', [PasienController::class, 'obat'])->name('pasien.obat');
        Route::post('/obat/create', [PasienController::class, 'createObat'])->name('pasien.createObat');
        Route::get('/gula-darah', [PasienController::class, 'gulaDarah'])->name('pasien.gulaDarah');
        Route::post('/gula-darah/create', [PasienController::class, 'createGulaDarah'])->name('pasien.createGulaDarah');
    });
});

require __DIR__ . '/auth.php';
