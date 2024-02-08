<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Mattch;

class Participant  extends Model
{
    use HasFactory;
   
    protected $fillable = ['name','skill_level','email','availability'];


    public function mattches()
    {
        return $this->belongsToMany(Mattch::class, 'mattch_participants');
    }


}
 
