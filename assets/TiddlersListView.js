define(['jquery', 'backbone', 'underscore', 'tiddlerListItemView'], function ($, Backbone, _, TiddlerListItemView) {

    return Backbone.View.extend({

        tagName: 'ul',

        render: function () {
            _.each(this.model.models, function (tiddler) {
                $(this.el).append(new TiddlerListItemView({ model: tiddler }).render().el);
            }, this);
            return this;
        }

    });

});