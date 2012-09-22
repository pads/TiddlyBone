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
        jquery: '/bags/tiddlybone_public/jquery-1.8.2.min',
        underscore: '/bags/tiddlybone_public/underscore-1.3.3.min',
        backbone: '/bags/tiddlybone_public/backbone-0.9.2.min',
        tiddler: '/bags/tiddlybone_public/Tiddler',
        tiddlers: '/bags/tiddlybone_public/Tiddlers'
    }
});

require(
    [
        'jquery',
        'underscore',
        'backbone',
        'tiddler',
        'tiddlers'
    ],

    function ($, _, Backbone, Tiddler, Tiddlers) {

        var tiddlers = new Tiddlers();

        var tiddler = new Tiddler({ title: "Sandbox"});
        tiddler.fetch({
            success: function(result) {
                console.log(result);
            }
        });

        tiddlers.fetch({
            success: function(result) {
                console.log(result);
            }
        });
    }
);