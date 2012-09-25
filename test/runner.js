require.config({
    shim: {
        'underscore': {
            deps: ['jquery'],
            exports: '_'
        },

        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    },

    paths: {
        jquery: 'lib/jquery-1.8.2.min',
        underscore: '../assets/underscore-1.3.3.min',
        backbone: '../assets/backbone-0.9.2.min',
        status: '../assets/UserStatus',
        tiddlerModel: '../assets/TiddlerModel'
    }
});

require(['spec/TiddlerModelSpec', 'tiddlerModel'], function () {

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

});