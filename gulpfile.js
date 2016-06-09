var gulp = require('gulp');
var hbsmaster = require('gulp-handlebars-master');
var rename = require('gulp-rename');

gulp.task('hbs', function () {
	var templatedata = {
		"static": '../static',
		"css-reset": {
			"title": "css-reset"
		},
		"font-face": {
			"title": "font-face"
		},
		"css-sprite":{
			"title": "css-sprite"		
		},
		"index":{
			"title":"ziven27 blog"
		}
	};
	var opt ={
		// ignorePartials: true, //ignores the unknown footer2 partial in the handlebars template, defaults to false 
		// partials : {
		// 	footer : '<footer>the end212312</footer>'
		// },
		batch : ['./hb/partials'],
		helpers : {
			capitals : function(str){
				return str.toUpperCase();
			}
		}
	};

	gulp.src('./hb/pages/*.hbs')
		.pipe(hbsmaster('./hb/layouts/page.hbs', templatedata, opt))
		.pipe(rename({
			extname: ".html"
		}))
		.pipe(gulp.dest('./p'));

	gulp.src('./hb/index.hbs')
		.pipe(hbsmaster('./hb/layouts/index.hbs', templatedata, opt))
		.pipe(rename({
			extname: ".html"
		}))
		.pipe(gulp.dest(''));
});

gulp.task('watch', function () {
    gulp.watch('./hb/**/*.hbs', ['hbs']);
});