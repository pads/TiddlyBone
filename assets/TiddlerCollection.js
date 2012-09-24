define(['backbone', 'tiddlerModel', 'status'], function (Backbone, TiddlerModel, status) {

    return Backbone.Collection.extend({
        model: TiddlerModel,
        url: '/bags/' + status.attributes.space.recipe + '/tiddlers'
    });

});