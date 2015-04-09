var gulp = require('gulp'),
    gutil = require('gulp-util'),
    gulpif = require('gulp-if'),
    compass = require('gulp-compass'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    watch = require('gulp-watch'),
    livereload = require('gulp-livereload'),
    spawn = require('child_process').spawn;

var env,
    theme,
    jsSources,
    sassSources,
    sassStyle,
    templateSources;

env = process.env.NODE_ENV || 'development';
theme = '../www/sites/all/themes/andrupal_subtheme/';

if (env==='development') {
  sassStyle = 'expanded';
} else {
  sassStyle = 'compressed';
}

jsSources = [
  // 'js/plugins/jquery.scrollmagic.min.js',
  // 'js/plugins/TweenMax.min.js',
  // 'js/plugins/full-height.js',
  // 'js/plugins/jquery.matchHeight.js',
  'js/plugins/viewport-width.js',
  'js/plugins/messages.js',
  'js/plugins/navigation.js',
  'js/plugins/hoverIntent.js',
  'js/plugins/superfish.js',
  // 'js/plugins/supposition.js',
  'js/scripts.js',
  'js/plugins/scroll-top.js',
  'js/plugins/smooth-scrolling.js'
];

gulp.task('js', function() {
  gulp.src(jsSources)
    .pipe(concat('scripts.min.js'))
    .on('error', gutil.log)
    .pipe(gulpif(env === 'production', uglify()))
    .pipe(gulp.dest(theme + 'theme/js'))
    .pipe(livereload())
});

gulp.task('compass', function() {
  gulp.src('sass/style.scss')
    .pipe(compass({
      sass: 'sass',
      css: theme + 'theme/css',
      image: theme + 'theme/img',
      font: theme + 'theme/fonts',
      style: sassStyle,
      require: ['sass-globbing','susy', 'breakpoint']
    })
    .on('error', gutil.log))
    .pipe(livereload())
});

gulp.task('print', function() {
  gulp.src('sass/print.scss')
    .pipe(compass({
      sass: 'sass',
      css: theme + 'theme/css',
      style: sassStyle,
      require: ['susy']
    })
    .on('error', gutil.log))
    .pipe(livereload())
});

gulp.task('html', function() {
  gulp.src('templates/*.html')
    .pipe(livereload())
});

templateSources = [
  theme + 'templates/*.php',
  theme + 'templates/*/*.php'
];

gulp.task('templates', function() {
  gulp.src(templateSources)
    .pipe(livereload())
});

gulp.task('auto-reload', function() {
    spawn('gulp', [], {stdio: 'inherit'});
    process.exit();
});

gulp.task('watch', function() {
  gulp.watch('gulpfile.js', ['auto-reload']);
  gulp.watch(jsSources, ['js']);
  gulp.watch(['sass/*.scss', 'sass/*/*.scss'], ['compass']);
  gulp.watch('sass/print.scss', ['print']);
  gulp.watch('templates/*.html', ['html']);
  gulp.watch(templateSources, ['templates']);
});

gulp.task('default', ['js', 'compass', 'print', 'html', 'templates', 'watch']);