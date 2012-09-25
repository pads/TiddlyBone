define(['jquery', 'backbone', 'underscore', 'hbs!TiddlerListItem'], function ($, Backbone, _, template) {

    return Backbone.View.extend({

        tagName: 'li',

        render: function () {
            $(this.el).html(template(this.model.toJSON()));
            return this;
        }

    });

});