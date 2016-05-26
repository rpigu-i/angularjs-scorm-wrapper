module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/**/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    karma: {
      options: {
          configFile: 'karma.config.js'
      },
      unit: {
          singleRun: true
      }

    },
    eslint: {
      target: ['Gruntfile.js', 'src/*.js', 'test/*.js'],
    },
    watch: {
      files: ['<%= eslint.target %>'],
      tasks: ['eslint', 'karma']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('test', ['eslint', 'karma']);

  grunt.registerTask('default', ['eslint', 'karma', 'concat', 'uglify']);

};
