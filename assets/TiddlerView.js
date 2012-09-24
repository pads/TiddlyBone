define(['jquery', 'backbone', 'underscore'], function ($, Backbone, _) {
    return Backbone.View.extend({

        template:_.template($('#tiddler-template').html()),

        render:function () {
            $(this.el).html(this.template(this.model.toJSON()));
            return this;
        }

    });
});