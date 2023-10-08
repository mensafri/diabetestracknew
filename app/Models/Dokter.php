<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dokter extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    protected $appends = [
        'nama'
    ];
    public function pasien()
    {
        return $this->hasMany(Pasien::class, 'pasien_id', 'id');
    }
    public function user()
    {
        return $this->belongsTo(User::class, 'users_id', 'id');
    }
    public function getNamaAttribute()
    {
        return $this->user->full_name;
    }
    public static function getAllDokter()
    {
        return self::all();
    }
}
