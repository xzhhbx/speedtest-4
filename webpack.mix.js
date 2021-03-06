let mix = require('laravel-mix');
const tailwindcss = require('tailwindcss')
require('laravel-mix-purgecss')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.js('src/app.js', 'public/js')


mix.sass('src/app.scss', 'public/css')
  .options({
    processCssUrls: false,
    postCss: [tailwindcss('./tailwind.config.js')],
  })
  .purgeCss({ folders: ['public'] })


mix.browserSync({
  server: {
    baseDir: "./public",
  },
  proxy: false,
  open: 'external',
  files: [
    "public/**"
  ],
  port: 443,
  https: true,
});
