<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'full_name',
        'email',
        'username',
        'no_hp',
        'password',
        'role',
        'foto_profil'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
        'pasien'
    ];
    protected $appends = [
        'pasien_data',
        'dokter_data',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];
    public function pasien()
    {
        return $this->hasMany(Pasien::class, 'users_id', 'id');
    }
    public function dokter()
    {
        return $this->hasMany(Dokter::class, 'users_id', 'id');
    }
    public function getPasienDataAttribute()
    {
        return $this->pasien;
    }
    public function getDokterDataAttribute()
    {
        return $this->dokter;
    }
}
