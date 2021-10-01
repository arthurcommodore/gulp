const gulp = require('gulp')
const {series, parallel} = gulp
const {appHtml, appCss, 
    appJs, appImg} = require('./gulpTasks/app.js')
const {depsCss, depsFonts}  = require('./gulpTasks/deps.js')
const {monitorarArquivos, servidor} = require('./gulpTasks/server.js')

module.exports.default = series(
    parallel(
        series(appHtml, appCss, appJs, appImg),
        series(depsCss, depsFonts)
    ),
    servidor,
    monitorarArquivos
)
