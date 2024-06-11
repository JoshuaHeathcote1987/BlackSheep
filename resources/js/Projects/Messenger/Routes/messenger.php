<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MessengerController;
use Inertia\Inertia;

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

Route::get('/messenger/home', function () {
    return Inertia::render('Messenger/Pages/Index');
});

Route::apiResources([
    'messenger' => MessengerController::class,
]);