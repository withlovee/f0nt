<?php namespace App\Http\Controllers\API;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
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
		$this->styles = [
			'normal' => ['normal', 'normal'],
			'italic' => ['normal', 'italic'],
			'bold' => ['bold', 'normal'],
			'bolditalic' => ['bold', 'italic']
		];
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
		return response()->json($fonts);
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

	private function slug($str) {
		return strtolower(str_replace(' ', '', $str));
	}

	private function slugStyle($fontStyle) {

		$style = '';

		if($fontStyle->weight != 'normal') {
			$style .= $fontStyle->weight;
		}
		if($fontStyle->italic != 'normal') {
			$style .= $fontStyle->italic;
		}
		if($style != ''){
			return '_'.$style;
		}

		return '';

	}

	private function generateCssFontWeight($fontStyle) {
		return "font-weight: $fontStyle->weight;
			font-style: $fontStyle->italic;";
	}

	private function generateCssSrcMain($filename, $formats) {
		if(in_array('eot', $formats)){
			$format = 'eot';
		}
		if(in_array('ttf', $formats)){
			$format = 'ttf';
		}
		return "src: url('". asset("res/$filename.$format") ."');";
	}

	private function generateCssOneSrc($filename, $format) {
		switch($format){
			case 'eot':
				$output = "url('". asset("res/$filename.eot?#iefix") ."') format('embedded-opentype')";
				break;
			case 'woff2':
				$output = "url('". asset("res/$filename.woff2") ."') format('woff2')";
				break;
			case 'woff':
				$output = "url('". asset("res/$filename.woff") ."') format('woff')";
				break;
			case 'ttf':
				$output = "url('". asset("res/$filename.ttf") ."') format('truetype')";
				break;
			case 'ttf':
				$output = "url('". asset("res/$filename.svg#$filename") ."') format('svg')";
				break;
			default:
				$output = "";
		}
		return $output;
	}

	private function generateCssSrc($filename, $formats) {

		$output_array = array();

		foreach($formats as $format) {
			$output_array[] = $this->generateCssOneSrc($filename, $format);
		}

		return implode(', ', $output_array);
	}

	private function generateCss($font, $fontStyle) {

		// Generate valid filename using Font obj and FontStyle obj
		$slug = $this->slug($font->name);
		$filename = $slug.$this->slugStyle($fontStyle);

		$formats = explode(',', $fontStyle->format);

		// Generate font-style and font-weight css from FontStyle obj
		$cssStyle = $this->generateCssFontWeight($fontStyle);

		$srcMain = $this->generateCssSrcMain($filename, $formats);
		$src = $this->generateCssSrc($filename, $formats);

		return "
		@font-face {
			font-family: '$font->name';
			$cssStyle
			$srcMain
			src: local('☺'), $src;
		}";

	}

	public function css($name, $style)
	{
		$name = str_replace('+', ' ', $name);

		$font = Font::name($name)->first();
		if($font == null) {
			return 'false';
		}

		$styles = explode(',', $style);
		$css = '';
		foreach($styles as $s) {
			$style_array = $this->styles[$s];
			$fontStyle = FontStyle::fontId($font->id)
				->weight($style_array[0])
				->italic($style_array[1])
				->first();
			$css .= $this->generateCss($font, $fontStyle);
		}

		$response = Response::make($css);
		$response->header('Content-Type', 'text/css');

		return $response;
	}

	public function cssDefault($name)
	{
		return $this->css($name, 'normal');
	}

	public function fontById($id)
	{
		$font = Font::find($id);
		return response()->json($font);
	}

	public function fontStylesByFontId($font_id)
	{
		$output = array();
		$output['font'] = Font::select('name', 'id')->find($font_id);
		$output['styles'] = FontStyle::fontId($font_id)
			->select('id', 'weight', 'italic', 'format')
			->get();

		return response()->json($output);
	}


}
