<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class FontStyle extends Model {

	protected $table = 'font_styles';

	public function font() {
		return $this->belongsTo('App\Font');
	}

	public function scopeFontId($query, $id) {
		return $query->where('font_id', '=', $id);
	}

	public function scopeItalic($query, $italic) {
		return $query->where('italic', '=', $italic);
	}

	public function scopeWeight($query, $weight) {
		return $query->where('weight', '=', $weight);
	}

	public function scopeDefault($query) {
		return $query->italic('normal')->weight('normal');
	}

}
