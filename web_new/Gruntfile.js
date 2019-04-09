module.exports = function(grunt) {

	grunt.initConfig({
	  uglify: {
	    build: {
	      files: {
	        'min/js/work.min.js': ['babeled/main.js', 'babeled/scroll.js'],
	        'min/js/about.min.js': ['babeled/main.js', 'babeled/scroll.js'],
	        'min/js/project.min.js': ['babeled/main.js', 'babeled/scroll.js', 'js/lightbox-plus-jquery.js'], 
	      }
	    }
	  },
	  cssmin: {
		  build: {
		    files: {
		      'min/css/work.min.css': ['css/main.css', 'css/work.css'],
		      'min/css/about.min.css': ['css/main.css', 'css/about.css'],
		      'min/css/project.min.css': ['css/main.css', 'css/project.css', 'css/lightbox.css'],
		    }
		  }
	  }
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('default', ['uglify', 'cssmin']);

};