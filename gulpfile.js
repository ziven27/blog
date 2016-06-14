var gulp = require('gulp');
var hbsmaster = require('gulp-handlebars-master');
var rename = require('gulp-rename');

gulp.task('hbs', function () {
	var templatedata = {
		"static": '../static',
		"reset": {
			"title": "【网站七步曲-第一步】css-reset"
		},
		"base": {
			"title": "【网站七步曲-第二步】css-base"
		},
		"global": {
			"title": "【网站七步曲-第三步】css-global"
		},
		"font-face": {
			"title": "font-face"
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

	gulp.src('./hb/pages/**/*.hbs')
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
	gulp.run('hbs');
    gulp.watch('./hb/**/*.hbs', ['hbs']);
});