define(['backbone', 'tiddler'], function (Backbone, Tiddler) {

    return Backbone.Collection.extend({
        model: Tiddler,
        url: '/bags/pads_public/tiddlers'
    });

});