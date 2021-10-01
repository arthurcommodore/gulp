const gulp = require('gulp')
const concat = require('gulp-concat')
const uglifycss = require('gulp-uglifycss')

function depsCss(cb) {
    return gulp.src('node_modules/font-awesome/css/font-awesome.css')    
        .pipe(uglifycss({'uglyComments': true}))
        .pipe(concat('deps.min.css'))
        .pipe(gulp.dest('build/assets/css'))
}

function depsFonts(cb) {
    return gulp.src('node_modules/font-awesome/fonts/*.*')    
        .pipe(gulp.dest('build/assets/fonts'))
}

module.exports = {
    depsCss,
    depsFonts
}
