<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\BusinessController;
use App\Http\Controllers\CommunityController;
use App\Http\Controllers\TotalContoller;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\AnnouncementController;

Route::post('/login',[AuthController::class, 'login']);
Route::get('/announcement/search/{announcement_name}', [AnnouncementController::class,'search']);
// Protected Routes
Route::group(['middleware'=>['auth:sanctum']], function () {
    Route::post('/logout',[AuthController::class, 'logout']);
    // Users
    Route::get('/users',[UserController::class,'index']);
    Route::get('/user/edit/{id}',[UserController::class,'show']);
    Route::put('/user/edit/{id}',[UserController::class,'update']);
    Route::delete('/user/delete/{id}',[UserController::class,'destroy']);
    Route::put('/user/action/{id}',[UserController::class,'action']);
    // Business
    Route::get('/businesses',[BusinessController::class,'index']);
    Route::get('/business/edit/{id}',[BusinessController::class,'show']);
    Route::put('/business/edit/{id}',[BusinessController::class,'update']);
    Route::delete('/business/delete/{id}',[BusinessController::class,'destroy']);

    // Community
    Route::get('/communities',[CommunityController::class,'index']);
    Route::get('/community/edit/{id}',[CommunityController::class,'show']);
    Route::put('/community/edit/{id}',[CommunityController::class,'update']);
    Route::delete('/community/delete/{id}',[CommunityController::class,'destroy']);

    // Total
    Route::get('/total',[TotalContoller::class,'index']);

    // Task

    Route::post('/task', [TaskController::class,'store']);
    Route::get('/task/edit/{id}',[TaskController::class,'show']);
    Route::put('/task/edit/{id}',[TaskController::class,'update']);
    Route::delete('/task/delete/{id}',[TaskController::class,'destroy']);
    Route::get('/tasks', [TaskController::class,'index']);

    // Announcement
    Route::post('/announcement', [AnnouncementController::class,'store']);
    Route::get('/announcementlist', [AnnouncementController::class,'index']);

});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
