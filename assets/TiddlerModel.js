define(['backbone', 'status'], function (Backbone, status) {

    return Backbone.Model.extend({
        urlRoot: '/bags/' + status.attributes.space.recipe + '/tiddlers',
        idAttribute: 'title',
        defaults: {
            'title': 'New Tiddler',
            'text': '',
            'tags': [],
            'fields': {}
        }
    });

});