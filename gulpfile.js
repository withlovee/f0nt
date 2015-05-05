var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.less('app.less');
    mix.copy('bower_components/jquery/dist/jquery.min.js', 'resources/js/jquery.js')
       .copy('bower_components/underscore/underscore-min.js', 'resources/js/underscore.js')
       .copy('bower_components/bootstrap/dist/js/bootstrap.min.js', 'resources/js/bootstrap.js')
       .copy('bower_components/react/JSXTransformer.js', 'resources/js/JSXTransformer.js')
       .copy('bower_components/react/react.min.js', 'resources/js/react.js')
       .scripts([
            'jquery.js',
            'underscore.js',
            'bootstrap.js',
            'JSXTransformer.js',
            'react.js'
        ], 'public/js/app.js');
});
