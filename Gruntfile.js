module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({

        sass: {
            dev: {
                files: {
                    'src/css/main.css': 'src/sass/main.scss'
                },
                options: {
                    compass: true,
                    style: 'expanded',
                    debugInfo: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
}