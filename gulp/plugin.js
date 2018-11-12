module.exports = {
    gulp:  require("gulp"),
    watch: require("gulp-watch"),
    plumber: require("gulp-plumber"),
    notify: require("gulp-notify"),
    requireDir: require("require-dir"),
    yaml: require("yaml").default,
    sass:  require("gulp-sass"),
    autoprefixer: require("gulp-autoprefixer"),
    imagemin: require("gulp-imagemin"),
    uglify: require("gulp-uglify"),
    concat: require("gulp-concat"),
    rename: require("gulp-rename"),
    ejs: require("gulp-ejs"),
    data: require("gulp-data"),
    fs: require("fs"),
    marked: require("marked"),
    fm: require("front-matter"),
    frontnote: require("gulp-frontnote"),
    RSS: require("rss"),
    browserSync: require("browser-sync"),
    connect: require("gulp-connect-php"),
    ftpDeploy: require("ftp-deploy"),
    crypto: require("crypto")
};