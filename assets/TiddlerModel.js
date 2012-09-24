define(['backbone'], function (Backbone) {

    return Backbone.Model.extend({
        urlRoot: '/bags/pads_public/tiddlers',
        idAttribute: 'title',
        defaults: {
            'title': 'New Tiddler',
            'text': null,
            'tags': [],
            'fields': {}
        }
    });

});