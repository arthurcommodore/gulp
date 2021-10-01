const gulp = require('gulp')
const {series} = gulp 
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')

function transformTs() {
    return tsProject.src()
        .pipe(tsProject())
        .pipe(uglify())
        .pipe(gulp.dest('build'))
}

exports.default = series(transformTs)
