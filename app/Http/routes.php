<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', 'ViewFontController@index');

Route::get('home', 'HomeController@index');

Route::controllers([
	'auth' => 'Auth\AuthController',
	'password' => 'Auth\PasswordController',
]);

Route::get('api/fonts/css/{name}/{style}', 'API\ViewFontController@css');
Route::get('api/fonts/css/{name}', 'API\ViewFontController@cssDefault');
Route::get('api/fonts', 'API\ViewFontController@index');