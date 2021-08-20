<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::post('/login', 'LoginController@login');
Route::post('/logout', 'LoginController@logout');
Route::post('/registration', 'RegiController@create');
Route::post('/google', 'LoginController@google');

Route::get('/getPost', 'UserController@getPost');
Route::get('/deletePost/{id}', 'UserController@deletePost');
Route::get('/getUser', 'UserController@getUser');
Route::get('/getUser/{id}', 'UserController@getUserById');
Route::post('/createPost', 'UserController@post');
Route::post('/updateUser', 'UserController@updateUser');
Route::get('/removeReactPost', 'UserController@removeReactPost');
Route::get('/reactPost', 'UserController@reactPost');
Route::get('/getAllFriends/{id}', 'UserController@getAllFriends');
Route::get('/getActiveFriends/{id}', 'UserController@getActiveFriends');


Route::get('/exportdata', 'UserController@export');
Route::get('/profile', 'UserController@profile');
Route::get('/about', 'UserController@about');
Route::get('/edit', 'UserController@edit');
Route::post('/edit', 'UserController@update');
