<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFontStylesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('font_styles', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('font_id')->unsigned();
			$table->string('weight');
			$table->string('italic');
			$table->string('format');
			$table->timestamp('created_at');

		});

		Schema::table('font_styles', function($table)
		{
			$table->foreign('font_id')->references('id')->on('fonts');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('font_styles');
	}

}
