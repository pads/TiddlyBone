require.config({

    paths: {
        jquery: 'test/helpers/lib/jquery-1.8.2.min',
        underscore: '../assets/underscore',
        backbone: '../assets/backbone',
        status: 'test/helpers/stubs/UserStatus',
        handlebars: '../assets/handlebars',
        hbt: 'test/helpers/stubs/hbt',
        tiddlerModel: '../assets/TiddlerModel',
        tiddlerCollection: '../assets/TiddlerCollection',
        tiddlerListItemView: '../assets/TiddlerListItemView',
        TiddlerListItem: '../assets/TiddlerListItem'
    },

    hbt: {
        extension: 'html'
    }
});

require([
            'handlebars',
            'tiddlerModel',
            'tiddlerCollection',
            'tiddlerListItemView',
            '/test/spec/TiddlerModelSpec.js',
            '/test/spec/TiddlerCollectionSpec.js',
            '/test/spec/TiddlerListItemViewSpec.js'
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