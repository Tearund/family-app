module.exports = function (grunt) {
	// time

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		   
		sass: {

			options: {
				// If you can't get source maps to work, run the following command in your terminal:
				// $ sass scss/foundation.scss:css/foundation.css --sourcemap
				// (see this link for details: http://thesassway.com/intermediate/using-source-maps-with-sass )
				sourceMap: true
			},

			dist: {
				options: {
					outputStyle: 'compressed'
				},
				files: {
					'css/index.css': 'scss/index.scss'
				}
			}

		},


		watch: {

			sass: {
				files: 'scss/**/*.scss',
				tasks: ['sass'],
				options: {
					livereload: true
				}
			},


		}
	});

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('package', ['compress:main']);
	grunt.registerTask('build', ['sass']);
	grunt.registerTask('default', ['watch']);
};
