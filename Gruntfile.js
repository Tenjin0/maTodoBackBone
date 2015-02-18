module.exports = function(grunt) {

  // Configuration de Grunt
  grunt.initConfig({

  	pkg: grunt.file.readJSON('package.json'),
 		watch: {
			broswer_js: {
				files: "*.js",
				tasks: ["jshint","nodemon"]
			}
		},

	 jshint: {
      //You get to make the name
      //The paths tell JSHint which files to validate
       files: ['Gruntfile.js', '/example.js'],
       tasks:["jshint"]
    },

    nodemon: {
		files: ['./example.js'],
       	tasks:["nodemon"]
    },
    node: {
    	files: ['./launcher.js'],
       	tasks:["node"]

    }

// ...
});
  // Définition des tâches Grunt
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-nodemon');
grunt.registerTask('launch',['node']);

};
