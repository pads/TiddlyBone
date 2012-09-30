require.config({

    paths: {
        jquery: 'test/helpers/lib/jquery-1.8.2.min',
        underscore: '../assets/underscore',
        backbone: '../assets/backbone',
        status: 'test/helpers/stubs/UserStatus',
        tiddlerModel: '../assets/TiddlerModel',
        tiddlerCollection: '../assets/TiddlerCollection'
    }
});

require([
            'tiddlerModel',
            'tiddlerCollection',
            '/test/spec/TiddlerModelSpec.js',
            '/test/spec/TiddlerCollectionSpec.js'
        ],
        function () {

            var jasmineEnv = jasmine.getEnv();
            jasmineEnv.updateInterval = 1000;

            var htmlReporter = new jasmine.HtmlReporter();

            jasmineEnv.addReporter(htmlReporter);

            jasmineEnv.specFilter = function (spec) {
                return htmlReporter.specFilter(spec);
            };

            var currentWindowOnload = window.onload;

            window.onload = function () {
                if (currentWindowOnload) {
                    currentWindowOnload();
                }
                execJasmine();
            };

            function execJasmine() {
                jasmineEnv.execute();
            }

        }
);