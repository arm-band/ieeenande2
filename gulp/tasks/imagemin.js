const _         = require('../plugin')
const dir       = require('../dir')

//画像圧縮
_.gulp.task('imagemin1', () => {
    return _.gulp.src(`${dir.src.img}/**/*.+(jpg|jpeg|png|gif|svg)`)
        .pipe(_.imagemin())
        .pipe(_.gulp.dest(dir.dist.img))
})
_.gulp.task('imagemin2', () => {
    return _.gulp.src(`${dir.src.image}/**/*.+(jpg|jpeg|png|gif|svg)`)
        .pipe(_.imagemin())
        .pipe(_.gulp.dest(dir.dist.image))
})

//上記をまとめておく
_.gulp.task('imagemin', _.gulp.parallel('imagemin1', 'imagemin2'))