define(['backbone', 'tiddlerModel'], function (Backbone, TiddlerModel) {

    return Backbone.Collection.extend({
        model: TiddlerModel,
        url: '/bags/pads_public/tiddlers'
    });

});