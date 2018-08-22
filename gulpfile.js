const gulp = require('gulp');
const sass = require('gulp-ruby-sass');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const browserify = require('gulp-browserify');


gulp.task('buildcss', () => {
	gulp.src('./src/sass/*.scss')
	return sass('./src/sass/*.scss').on('error', sass.logError)
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('./src'))
});

gulp.task('buildjs', () =>
	gulp.src('./src/js/*.js')
	.pipe(concat('scripts.bundle.js'))
	.pipe(babel({
		presets: ['env']
	}))
	.pipe(browserify({
		insertGlobals: true,
		debug: !gulp.env.production
	}))
	.pipe(gulp.dest('./public'))
	.on('error', function (e) {
		console.error(e);
		this.emit('end');
	})
);


gulp.task('watch', () => {
	gulp.watch('./src/sass/**', ['buildcss']);
	gulp.watch('../src/js/**', ['buildjs']);
});

gulp.task('default', ['buildcss', 'buildjs']);
