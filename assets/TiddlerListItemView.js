define(['jquery', 'backbone', 'hbt!TiddlerListItem'], function ($, Backbone, template) {

    return Backbone.View.extend({

        tagName: 'li',

        render: function () {
            $(this.el).html(template(this.model.toJSON()));
            return this;
        }

    });

});