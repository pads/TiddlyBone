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
        jquery: '/bags/common/tiddlers/jquery',
        underscore: '/bags/tiddlybone_public/tiddlers/underscore-1.3.3.min',
        backbone: '/bags/tiddlybone_public/tiddlers/backbone-0.9.2.min',
        status: '/bags/tiddlybone_public/tiddlers/UserStatus',
        tiddlerModel: '/bags/tiddlybone_public/tiddlers/TiddlerModel',
        tiddlerCollection: '/bags/tiddlybone_public/tiddlers/TiddlerCollection',
        tiddlerView: '/bags/tiddlybone_public/tiddlers/TiddlerView',
        tiddlersListView: '/bags/tiddlybone_public/tiddlers/TiddlersListView',
        tiddlerListItemView: '/bags/tiddlybone_public/tiddlers/TiddlerListItemView',
        tiddlerFormView: '/bags/tiddlybone_public/tiddlers/TiddlerFormView'
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