const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')

function servidor(cb) {
    return gulp.src('build')
        .pipe(webserver({
            port: 8080,
            open: true,
            livereload: true,
        }))
}

function monitorarArquivos(cb) {
    watch('src/paginas/*.html', () => gulp.series('appHtml')())
    watch('src/paginas/*.scss', () => gulp.series('appCSS')())
    watch('src/paginas/*.js', () => gulp.series('appJS')())
    watch('src/assets/imgs/*.*', () => gulp.series('appIMG')())
    return cb()
}

module.exports = {
    monitorarArquivos,
    servidor
}

//sempre que algum arquivo muda ele vai atualizar
//chamou o index pelo ajax