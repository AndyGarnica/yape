var gulp = require("gulp");
var sass = require("gulp-sass");


gulp.task("default",function(){
  console.log("hola!!!");
});

gulp.task("sass", function(){
  return gulp.src("public/**/*.scss")
  .pipe(sass())
  .pipe(gulp.dest("src/css"));
});
