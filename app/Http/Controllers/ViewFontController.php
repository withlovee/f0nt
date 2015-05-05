<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use App\Font;
use App\FontStyle;

class ViewFontController extends Controller {

	/**
	 * Create a new controller instance.
	 *
	 * @return void
	 */
	public function __construct()
	{
		$this->middleware('guest');
	}

	/**
	 * Display a listing of all fonts.
	 *
	 * @return Response
	 */
	public function index()
	{
		$fonts = Font::all();
		return view('view_fonts.index', [
			'fonts' => $fonts
		]);
	}

	/**
	 * Display the specified font.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function view($id)
	{
		//
	}


}
