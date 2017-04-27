var path = require('path');
var gulp = require('gulp');
var freemarker = require("gulp-freemarker");

console.log(path.resolve(__dirname,"./src/ftl/src"));

gulp.task('ftl', function() {
    gulp.src("src/ftl/mock/*.json")
        .pipe(freemarker({
            viewRoot: path.resolve(__dirname,"./src/ftl/src"),
            options: {}
        }))
        .pipe(gulp.dest("src/ftl/dest"));
});
