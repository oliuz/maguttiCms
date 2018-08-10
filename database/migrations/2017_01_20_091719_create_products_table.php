<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Migration auto-generated by Sequel Pro Laravel Export
 * @see https://github.com/cviebrock/sequel-pro-laravel-export
 */
class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('category_id')->nullable();
            $table->string('title', 255);
            $table->string('subtitle', 255);
            $table->text('description');
            $table->string('slug', 255)->nullable();
            $table->string('image', 255)->nullable();
            $table->string('doc', 255)->nullable();
            $table->string('video', 255);
            $table->integer('sort');
            $table->tinyInteger('pub')->nullable()->default(1);
            $table->string('seo_title', 255)->nullable();
            $table->string('seo_description', 255)->nullable();
            $table->string('seo_keywords', 255)->nullable();
            $table->integer('created_by');
            $table->timestamps();
            $table->unique('slug', 'products_slug_unique');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
