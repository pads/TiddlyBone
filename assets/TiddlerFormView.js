define(['jquery', 'backbone', 'hbt!TiddlerForm'], function ($, Backbone, template) {
    return Backbone.View.extend({

        events: {
            'click .submit-button': 'saveTiddler'
        },

        saveTiddler: function () {
            this.model.set({
                title: $('#tiddler-title').val(),
                text: $('#tiddler-content').val(),
                tags: $('#tiddler-tags').val().split(',')
            });

            this.model.save();
            return false;
        },

        render: function () {
            $(this.el).html(template(this.model.toJSON()));
            return this;
        }

    });
});