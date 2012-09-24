define(['jquery', 'backbone', 'underscore'], function ($, Backbone, _) {
    return Backbone.View.extend({

        template:_.template($('#new-tiddler-template').html()),

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
            $(this.el).html(this.template(this.model.toJSON()));
            return this;
        }

    });
});