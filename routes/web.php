<?php

use App\Http\Controllers\AuthController;
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

Route::post('/login', [AuthController::class, 'login'])->middleware('guest')->name('login');

Route::get('/logout', [AuthController::class, 'logout'])->middleware('auth');

Route::get('/login_status', function() {
    if(auth()->user()) { 
        $user = auth()->user();
        return response([
        'loggedin' => true,    
        'user' => [
            'name'=> $user->name,
            'phone'=> $user->phone,
            'email'=> $user->email,
            'role'=> $user->roles[0]->name,
        ],
        ], 200);
    } 
    return response(['loggedin' => false], 200);
});

Route::get('/', function () {
    return view('index');
})->name('root');

Route::get('/{path?}', function () {
    return view('index');
    // return redirect()->route('root');
});


