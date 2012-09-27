define(['jquery', 'backbone', 'underscore', 'hbt!TiddlerForm'], function ($, Backbone, _, template) {
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
            document.location.href = '#tiddler/' + this.model.get('title');

            return false;
        },

        render: function () {
            $(this.el).html(template(this.model.toJSON()));
            return this;
        }

    });
});