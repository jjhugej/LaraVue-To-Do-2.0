<?php

use Illuminate\Support\Facades\Route;

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
    return view('home');
})->name('home');

Auth::routes();

Route::get('/user', function(){
    if(Auth::check()){
        return auth()->user();
    }
});

Route::get('/todoitem', 'App\Http\Controllers\TodoItemController@index')->middleware('auth');
Route::post('/todoitem', 'App\Http\Controllers\TodoItemController@store')->middleware('auth');
Route::delete('/todoitem/{todoId}', 'App\Http\Controllers\TodoItemController@destroy')->middleware('auth');

//Route::get('/home', [App\Http\Controllers\HomeController::class, 'index']);
