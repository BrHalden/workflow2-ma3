module.exports = function (grunt) {
	 grunt.initConfig ({
		pkg: grunt.file.readJSON('package.json'),
		less: {
			development: {
				files: {
					'dist/css/styles.css' : 'less/styles.less'
				}
			}
		},
		cssmin: {
			minify: {
				src: 'dist/css/styles.css',
				dest: 'dist/css/styles.min.css'
			}
		},
		browserSync: {
			dev: {
				bsFiles: {
					src: [
						'dist/css/styles.min.css',
						'*.html'
					]
				},
				options: {
					watchTask: true,
					server: './'
				}
			}
		},
		watch: {
			css: {
				files: 'less/styles.less',
				tasks: ['less', 'cssmin']
			}
		}
	})
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.registerTask('default', ['browserSync', 'watch']);
};