const { series } = require("gulp");

const bower = require("main-bower-files");
const bowerNormalizer = require("gulp-bower-normalize");

function normalizeLibs() {
	return gulp
		.src(bower(), { base: "./bower_components" })
		.pipe(bowerNormalizer({ bowerJson: "./bower.json", flatten: true }))
		.pipe(gulp.dest("./assets/scripts/libs/"));
}

module.exports.default = normalizeLibs;
