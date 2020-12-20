const gulp = require('gulp');
const { src, dest } = require('gulp');
const less = require('gulp-less');
const minifyCSS = require('gulp-csso');

function css() {
    return src('less/**/*.less') // 1. Location of source files (.scss)
        .pipe(less()) // 2. Compile the SCSS to CSS
        .pipe(minifyCSS()) // 3. Minify the CSS
        .pipe(dest('css')) // 4. Write the CSS file out to a specific destination
}


exports.css = css;
