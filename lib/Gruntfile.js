module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      files: ['../javascript/*.js'], //location of javascript files
      options: {
        predef: ["document", "console", "$", "window" ], //allows for predefined things not found in js
        esnext: true, //allows for ES6 
        globalstrict: true,
        globals: {"Sandwich":true} //name value pairs, allows to define global vars used in many files.
      }
    },
    sass: { //setup sass compilation
      dist: {
        files: {
          '../css/main.css': '../sass/styles.scss'
        }
      }
    },
    watch: { //automatically watch for changes
      javascripts: {
        files: ['../javascript/*.js'], 
        tasks: ['jshint']
      },
      // sass: {
      //   files: ['../sass/*.scss'],
      //   tasks: ['sass']
      // }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'watch']);
};