module.exports = function (eleventyConfig) {
	return {
		// configuration object for directories
		dir: {
			// Eleventy will look here for files to process
			input: 'src/pages',
			// the built files will be placed here
			output: 'dist',
			// tells Eleventy where to look for layouts/partials
			includes: '../partials',
		},
	};
};