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
        status: '/bags/tiddlybone_public/UserStatus',
        tiddlerModel: '/bags/tiddlybone_public/TiddlerModel',
        tiddlerCollection: '/bags/tiddlybone_public/TiddlerCollection',
        tiddlerView: '/bags/tiddlybone_public/TiddlerView',
        tiddlersListView: '/bags/tiddlybone_public/TiddlersListView',
        tiddlerListItemView: '/bags/tiddlybone_public/TiddlerListItemView',
        tiddlerFormView: '/bags/tiddlybone_public/TiddlerFormView'
    }
});

require(
    [
        'jquery',
        'underscore',
        'backbone',
        'tiddlerCollection',
        'tiddlerModel',
        'tiddlerView',
        'tiddlersListView',
        'tiddlerFormView'
    ],

    function ($, _, Backbone, TiddlerCollection, TiddlerModel, TiddlerView, TiddlersListView, TiddlerFormView) {

        var AppRouter = Backbone.Router.extend({

            routes:{
                'home': 'home',
                'tiddler': 'getTiddlerByInput',
                'tiddler/:title': 'getTiddler',
                'tiddlers': 'getTiddlers',
                'newTiddler': 'newTiddler'
            },

            home: function () {
                $('section').empty();
            },

            getTiddlerByInput: function () {
                var context = this;
                var title = $('#title-input').val();
                this.tiddler = new TiddlerModel({ title: title });
                this.tiddlerView = new TiddlerView({ model: this.tiddler });
                this.tiddler.fetch({
                    success: function () {
                        $('section').html(context.tiddlerView.render().el);
                    }
                });
            },

            getTiddler: function (title) {
                var context = this;
                this.tiddler = new TiddlerModel({ title: title });
                this.tiddlerView = new TiddlerView({ model: this.tiddler });
                this.tiddler.fetch({
                    success: function () {
                        $('section').html(context.tiddlerView.render().el);
                    }
                });
            },

            getTiddlers: function () {

                var context = this;
                this.tiddlersList = new TiddlerCollection();
                this.tiddlersListView = new TiddlersListView({ model: this.tiddlersList });
                this.tiddlersList.fetch({

                    success: function () {
                        $('section').html(context.tiddlersListView.render().el);
                    }
                });
            },

            newTiddler: function () {
                this.tiddler = new TiddlerModel();
                this.newTiddlerForm = new TiddlerFormView({ model: this.tiddler });
                $('section').html(this.newTiddlerForm.render().el);
            }
        });

        var app = new AppRouter();
        Backbone.history.start();

    }
);