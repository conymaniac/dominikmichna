/*
 * grunt-init
 * https://gruntjs.com/
 *
 * Copyright (c) 2016 "Cowboy" Ben Alman, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    less: {
        dev: {
            files: {
                'dist/static/css/style.min.css': 'src/less/style.less'
            }
        },
        prod: {
            options: {
                compress: true
            },
            files: {
                'dist/static/css/style.min.css': 'src/less/style.less'
            }
        }
    },


  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-less');

  // Whenever the "test" task is run, run some tests.
  grunt.registerTask('dev', ['less:dev']);
  grunt.registerTask('prod', ['less:prod']);

};