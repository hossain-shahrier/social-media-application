<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JobController;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/addjob','JobController@addjob');
Route::get('/joblist', 'JobController@joblist');
Route::get('/joblist/{id}', 'JobController@jobdetails');
Route::get('/updatejob/{id}', 'JobController@updatejob');
Route::post('updatejob/{id}', 'JobController@editjob');
Route::delete('removejob/{id}', 'JobController@removejob');
Route::post('/jobsearch', 'JobController@jobsearch');
Route::post('adduser/', 'JobController@adduser');
Route::post('/jobapply/{id}','JobController@jobapply');