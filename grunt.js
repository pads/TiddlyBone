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

    grunt.registerTask('copy-deps', 'Copy jam dependencies into the assets folder.', function() {

        grunt.file.recurse('jam', function(absolutePath, rootDir, subDir, fileName) {
            if(fileName.indexOf('.js') !== -1 && fileName.indexOf('.json') === -1) {
                grunt.log.writeln('copying ' + absolutePath + ' to assets');
                grunt.file.copy(absolutePath, 'assets/' + fileName);
            }
        });

    });
};