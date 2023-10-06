<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('gula_darahs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('pasien_id');
            $table->bigInteger('hasil');
            $table->string('foto');
            $table->timestamps();

            $table->foreign('pasien_id')->references('id')->on('pasiens');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('gula_darahs');
    }
};
