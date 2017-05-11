var path = require('path');
var fs = require('fs');
var glob = require('glob');
var gulp = require('gulp');
var freemarker = require("gulp-freemarker");
var nodemon = require('gulp-nodemon');
var bs = require('browser-sync').create();
var ROOT = path.resolve(__dirname);
var server = path.resolve(ROOT, 'mock');

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
// browser-sync配置，配置里启动nodemon任务
gulp.task('browser-sync', ['nodemon'], function() {
  bs.init(null, {
    proxy: "http://localhost:80",
    port: 8082
  });
});
// browser-sync 监听文件
gulp.task('mock', ['browser-sync'], function() {
  gulp.watch(['./mock/router.js', './mock/**'], ['bs-delay']);
});
// 延时刷新
gulp.task('bs-delay', function() {
  setTimeout(function() {
    bs.reload();
    console.log('重启完毕!');
  }, 2000);
});

// 服务器重启
gulp.task('nodemon', function(cb) {
  // 设个变量来防止重复重启
  var started = false;
  var stream = nodemon({
    script: './mock/mock.js',
    // 监听文件的后缀
    ext: "js html",
    env: {
      'NODE_ENV': 'development'
    },
    // 监听的路径
    watch: [
      server
    ]
  });
  stream.on('start', function() {
    if (!started) {
      cb();
      started = true;
    }
  }).on('crash', function() {
    console.error('Application has crashed!\n')
    stream.emit('restart', 10)  // restart the server in 10 seconds
  })
});
