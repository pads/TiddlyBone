module.exports = function(grunt) {

    grunt.initConfig({

        jasmine: {
            src : 'assets/require.js',
            helpers : 'test/lib/*.js',
            timeout : 10000
        }
    });

    grunt.loadNpmTasks('grunt-jasmine-runner');

};