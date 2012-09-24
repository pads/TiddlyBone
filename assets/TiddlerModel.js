define(['backbone'], function (Backbone) {

    return Backbone.Model.extend({
        urlRoot: '/bags/pads_public/tiddlers',
        idAttribute: 'title'
    });

});