module.exports = function(grunt) {

	grunt.initConfig({
	  concat: {
	    js_work: {
	      src: ['js/fades.js', 'js/work.js'],
	      dest: 'build/js/built_work.js',
	    },
	    es5_work: {
	      src: ['es5/fades.js', 'es5/work.js'],
	      dest: 'build/es5/built_work.js',
	    },
	    css_work: {
	      src: ['css/main.css', 'css/work.css'],
	      dest: 'build/css/built_work.css',
	    },
	  },
	  watch: {
	    js: {
	      files: ['js/**/*.js'],
	      tasks: ['concat:js_work'],
	    },
	    css: {
	      files: ['css/**/*.css'],
	      tasks: ['concat:css_work'],
	    },
	  },
	  uglify: {
	    build: {
	      files: {
	        'build/es5/built_work.min.js': ['build/es5/built_work.js'] 
	      }
	    }
	  }
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ['concat', 'uglify', 'watch']);

};