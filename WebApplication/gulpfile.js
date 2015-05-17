/// <binding Clean='clean' />

var gulp = require("gulp"),
//  rimraf = require("rimraf"),
  del = require('del'),
  fs = require("fs"),
  project = require("./project.json");

var paths = {
  bower: "./bower_components/",
  lib: "./" + project.webroot + "/lib/"
};

gulp.task("clean", function (cb) {
  del(paths.lib, cb);
//  rimraf(paths.lib, cb);
});

gulp.task("copy", ["clean"], function () {
  var bower = {
    "bootstrap": "bootstrap/dist/**/*.{js,map,css,ttf,svg,woff,eot}",
    "bootstrap-touch-carousel": "bootstrap-touch-carousel/dist/**/*.{js,css}",
    "hammer.js": "hammer.js/hammer*.{js,map}",
    "jquery": "jquery/jquery*.{js,map}",
    "jquery-validation": "jquery-validation/jquery.validate.js",
    "jquery-validation-unobtrusive": "jquery-validation-unobtrusive/jquery.validate.unobtrusive.js"
  };

  for (var destinationDir in bower) {
    gulp.src(paths.bower + bower[destinationDir])
      .pipe(gulp.dest(paths.lib + destinationDir));
  }
});
