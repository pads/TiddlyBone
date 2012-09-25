module.exports = function(grunt) {

    grunt.initConfig({

        lint: {
            files: ['assets/T*.js', 'assets/UserStatus.js', 'test/spec/*.js']
        },

        watch: {
            files: ['assets/*js', 'test/spec/*,js'],
            tasks: 'jasmine'
        },

        jasmine: {
            src : 'assets/require.js',
            helpers : 'test/lib/*.js',
            timeout : 10000
        }
    });

    grunt.loadNpmTasks('grunt-jasmine-runner');

    grunt.registerTask('default', 'lint jasmine');
};