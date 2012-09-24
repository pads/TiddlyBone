define(['jquery', 'backbone', 'underscore'], function ($, Backbone, _) {
    return Backbone.View.extend({

        template:_.template($('#tiddler-template').html()),

        events: {
            'click .delete-button': 'delete'
        },

        render: function () {
            $(this.el).html(this.template(this.model.toJSON()));
            return this;
        },

        edit: function () {

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