define(['jquery', 'backbone', 'underscore', 'tiddlerFormView'], function ($, Backbone, _, TiddlerFormView) {
    return Backbone.View.extend({

        template:_.template($('#tiddler-template').html()),

        events: {
            'click .edit-button': 'edit',
            'click .delete-button': 'delete'
        },

        render: function () {
            $(this.el).html(this.template(this.model.toJSON()));
            return this;
        },

        edit: function () {
            this.newTiddlerForm = new TiddlerFormView({ model: this.model });
            $('section').html(this.newTiddlerForm.render().el);

            //TODO: this is a bad way to trick Backbone into reloading this view when edit is finished.
            document.location.href = '#editTiddler/' + this.model.get('title');
        },

        delete: function () {
            this.model.destroy({
                success:function () {
                    document.location.href = '#home';
                }
            });
            return false;
        }

    });
});