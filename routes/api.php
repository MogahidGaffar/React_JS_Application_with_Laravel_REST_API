<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ParticipantContoller;
use App\Http\Controllers\MatchContoller;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('matches/create_schedule', 'App\Http\Controllers\MatchContoller@create_schedule');
Route::apiResource('participants', ParticipantContoller::class)->except(['create','edit']);
Route::apiResource('matches', MatchContoller::class)->except(['edit']);
