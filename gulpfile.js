var path = require('path');
var fs = require('fs');
var glob = require('glob');
var gulp = require('gulp');
var freemarker = require("gulp-freemarker");


gulp.task('ftl', function () {
  gulp.src("src/ftl/mock/*.json")
    .pipe(freemarker({
      viewRoot: path.resolve(__dirname, "./src/ftl/src"),
      options: {}
    }))
    .pipe(gulp.dest("src/ftl/dest"));
});

gulp.task('ftl2html', function () {
  glob("src/ftl/dest/*.html", {}, function (er, files) {
    files.map(function (v,i) {
      var basename = path.basename(v,".html");
      var htmlstring = fs.readFileSync(v);
      fs.writeFileSync(path.join(__dirname,"src/module/",basename,"/"+basename+".html"), htmlstring);
    })
  })
});
