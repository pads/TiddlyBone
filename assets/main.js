require.config({

    paths: {
        text: '/bags/tiddlybone_public/tiddlers/text',
        jquery: '/bags/common/tiddlers/jquery',
        underscore: '/bags/tiddlybone_public/tiddlers/underscore',
        backbone: '/bags/tiddlybone_public/tiddlers/backbone',
        hbt: '/bags/tiddlybone_public/tiddlers/hbt',
        handlebars: '/bags/tiddlybone_public/tiddlers/handlebars',
        status: '/bags/tiddlybone_public/tiddlers/UserStatus',
        tiddlerModel: '/bags/tiddlybone_public/tiddlers/TiddlerModel',
        tiddlerCollection: '/bags/tiddlybone_public/tiddlers/TiddlerCollection',
        tiddlerView: '/bags/tiddlybone_public/tiddlers/TiddlerView',
        tiddlersListView: '/bags/tiddlybone_public/tiddlers/TiddlersListView',
        tiddlerListItemView: '/bags/tiddlybone_public/tiddlers/TiddlerListItemView',
        tiddlerFormView: '/bags/tiddlybone_public/tiddlers/TiddlerFormView'
    },

    hbt: {
        extension: 'html'
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
                        context.tiddlerView.render();
                    }
                });
            },

            getTiddler: function (title) {
                var context = this;
                this.tiddler = new TiddlerModel({ title: title });
                this.tiddlerView = new TiddlerView({ model: this.tiddler });
                this.tiddler.fetch({
                    success: function () {
                        context.tiddlerView.render();
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