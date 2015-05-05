<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Font extends Model {

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'fonts';

	public function styles() {
		return $this->hasMany('App\FontStyle');
	}

	public function scopeName($query, $name) {
		$name = str_replace('%20', ' ', $name);
		return $query->where('name', '=', $name);
	}

	public static function fontDefault($name) {
		// $fontDefault = $this->styles->where('font_id', '=', $font->id)->where('style', '=', 'normal')->where('weight', '=', 'normal')->first();
		// $output = [
			// 'name' => $font->name,
			// 'format' => $fontDefault->format
		// ]
		return $name;
	}

}
