var gulp = require('gulp');
var hbsmaster = require('gulp-handlebars-master');
var rename = require('gulp-rename');

gulp.task('init', function () {
	var templatedata = {
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
		.pipe(hbsmaster('./hb/layout.hbs', templatedata, opt))
		.pipe(rename({
			extname: ".html"
		}))
		.pipe(gulp.dest('./p'));

	gulp.src('./hb/index.hbs')
		.pipe(hbsmaster('./hb/layout.hbs', templatedata, opt))
		.pipe(rename({
			extname: ".html"
		}))
		.pipe(gulp.dest(''));
});