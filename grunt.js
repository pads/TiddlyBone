module.exports = function(grunt) {

    grunt.initConfig({

        lint: {
            files: ['assets/T*.js', 'assets/UserStatus.js', 'test/spec/*.js']
        },

        watch: {
            files: ['assets/*js', 'test/spec/*.js'],
            tasks: 'jasmine'
        },

        jasmine: {
            src : 'assets/require.js',
            helpers : 'test/helpers/lib/*.js',
            timeout : 10000,
            junit : {
                output : 'junit/'
            }
        }
    });

    grunt.loadNpmTasks('grunt-jasmine-runner');

    grunt.registerTask('default', 'lint copy-deps jasmine');

    grunt.registerTask('copy-deps', 'Symlink jam dependencies to the assets folder.', function() {

        var fs = require('fs');

        grunt.file.recurse('jam', function(absolutePath, rootDir, subDir, fileName) {
            if(fileName.indexOf('.js') !== -1 && fileName.indexOf('.json') === -1) {

                if(!fs.existsSync('assets/' + fileName)) {

                    grunt.log.writeln('symlinking ' + absolutePath + ' to assets folder');
                    fs.symlinkSync('../' + absolutePath, 'assets/' + fileName);
                }
            }
        });

    });

    grunt.registerTask('clean-deps', 'Remove jam dependency symlinks.', function() {

        var fs = require('fs');

        grunt.file.recurse('jam', function(absolutePath, rootDir, subDir, fileName) {

            if(fileName.indexOf('.js') !== -1 && fileName.indexOf('.json') === -1) {

                if(fs.existsSync('assets/' + fileName)) {

                    grunt.log.writeln('removing symlink ' + absolutePath + ' from assets folder');
                    fs.unlinkSync('assets/' + fileName);
                }
            }
        });

    });
};