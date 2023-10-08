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
    Route::get('/dashboard', [AdminController::class, 'index'])->name('dashboard');
    Route::post('/dashboar/create', [AdminController::class, 'create'])->name('admin.create');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::middleware('auth.role:Dokter')->prefix('dokter')->group(function () {
        Route::get('/', [DokterController::class, 'index'])->name('dokter.index');
    });


    Route::middleware('auth.role:Perawat')->prefix('perawat')->group(function () {
        Route::get('/', [PerawatController::class, 'index'])->name('perawat.index');
        Route::post('/create', [PerawatController::class, 'create'])->name('perawat.create');
        Route::get('/list-pasien', [PerawatController::class, 'list'])->name('perawat.list');
    });

    Route::middleware('auth.role:Pasien')->prefix('pasien')->group(function () {
        Route::get('/', [PasienController::class, 'index'])->name('pasien.index');
    });
});

require __DIR__ . '/auth.php';
