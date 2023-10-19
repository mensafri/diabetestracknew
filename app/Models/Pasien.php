<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pasien extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    protected $hidden = [
        'user',
        'dokter'
    ];
    protected $appends = [
        'nama_dokter',
        'nama',
        'rekam_medis'
    ];
    public function user()
    {
        return $this->belongsTo(User::class, 'users_id', 'id');
    }
    public function dokter()
    {
        return $this->belongsTo(Dokter::class);
    }
    public function getNamaAttribute()
    {
        return $this->user->full_name;
    }
    public function getNamaDokterAttribute()
    {
        return $this->dokter->nama;
    }
    public function getRekamMedisAttribute()
    {
        return $this->user->username;
    }
}
