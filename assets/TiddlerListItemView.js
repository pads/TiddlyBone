define(['jquery', 'backbone', 'underscore'], function ($, Backbone, _) {

    return Backbone.View.extend({

        tagName: 'li',

        template: _.template($('#tiddler-list-template').html()),

        render: function () {
            $(this.el).html(this.template(this.model.toJSON()));
            return this;
        }

    });

});