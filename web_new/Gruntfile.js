module.exports = function(grunt) {

	grunt.initConfig({
	  concat: {
	    es5_work: {
	      src: ['es5/fades.js', 'es5/work.js'],
	      dest: 'build/es5/built_work.js',
	    },
	    es5_about: {
	      src: ['es5/fades.js', 'es5/about.js'],
	      dest: 'build/es5/built_about.js',
	    },
	    es5_project: {
	      src: ['es5/fades.js', 'js/lightbox-plus-jquery.js'],
	      dest: 'build/es5/built_project.js',
	    },
	    css_work: {
	      src: ['css/main.css', 'css/work.css'],
	      dest: 'build/css/built_work.css',
	    },
	    css_about: {
	      src: ['css/main.css', 'css/about.css'],
	      dest: 'build/css/built_about.css',
	    },
	    css_project: {
	      src: ['css/main.css', 'css/project.css', 'css/lightbox.css'],
	      dest: 'build/css/built_project.css',
	    },
	  },
	  //watch: {
	    //js: {
	      //files: ['js/**/*.js'],
	      //tasks: ['concat:js_work'],
	    //},
	    //css: {
	      //files: ['css/**/*.css'],
	      //tasks: ['concat:css_work'],
	    //},
	  //},
	  uglify: {
	    build: {
	      files: {
	        'build/es5/built_work.min.js': ['build/es5/built_work.js'],
	        'build/es5/built_about.min.js': ['build/es5/built_about.js'],
	        'build/es5/built_project.min.js': ['build/es5/built_project.js'], 
	      }
	    }
	  }
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ['concat', 'uglify']);

};