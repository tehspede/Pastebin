module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express-server');

  grunt.initConfig({
  watch: {
    scripts: {
      files: ['server/**/*.js'],
      tasks: ['express'],
      options: {
        spawn: false,
        interrupt: true,
        debounceDelay: 250,
        atBegin: true
      },
    },
  },
  express: {
    dev: {
      options: {
        script: 'index.js'
      }
    }
  }
});

};
