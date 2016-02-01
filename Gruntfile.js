'use strict';

var filesToValidate = {
    src: [
        'Gruntfile.js',
        'app.js',
        'config.js',

        'conf/**/*.js',

        'modules/**/*.js',

        'models/**/*.js',
        'public/**/*.js',
        'routes/**/*.js',
        'views/**/*.js',

        // Bypass validation.
        '!public/js/vendor/**/*.js'
    ]
};

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
          options:{
            mangle: false
          },
          'app': {
              files: {
                  'public/js/app/app-whole.min.js': [
                      'public/js/app/app-whole.js',
                  ]
              }
          }
        },
        jadeUsemin: {
            scripts: {
                options: {
                    tasks: {
                        js: ['concat', 'uglify'],
                        css: ['concat', 'cssmin'],
                    },
                    targetPrefix: 'public',
                },
                files: [{
                    dest: './views/header.jade',
                    src: './views/header_dist.jade'
                }]
            }
        },
        ngAnnotate:{
          options:{
            singleQuotes: true,
          },

          app:{
            files:{
              'public/js/app/app-whole.js': ['public/js/app/app.js', 
                                             'public/js/app/services_module.js',
                                             'public/js/app/services/*.js',
                                             'public/js/app/ctrl_module.js',
                                             'public/js/app/controllers/*.js']
            }
          }
        },
        
        jshint: {all: {options: {jshintrc: true}, files: filesToValidate}},

        jscs: {all: {options: {config: '.jscsrc'}, files: filesToValidate}}
    });

    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jscs');
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-jade-usemin');


    grunt.registerTask('combine', ['ngAnnotate','uglify', 'jadeUsemin']);
    grunt.registerTask('quality', ['jshint', 'jscs']);
};
