define(['jquery', 'underscore', 'backbone', 'tiddlerFormView', 'hbt!Tiddler'],
    function ($, _, Backbone, TiddlerFormView, template) {
        return Backbone.View.extend({

            el: 'section',

            initialize: function () {
                _.bindAll(this, 'render');
                this.model.bind('change', this.render, this);
            },

            events: {
                'click .edit-button': 'edit',
                'click .delete-button': 'doDelete'
            },

            render: function () {
                $(this.el).html(template(this.model.toJSON()));
            },

            edit: function () {
                this.newTiddlerForm = new TiddlerFormView({ model: this.model });
                $(this.el).html(this.newTiddlerForm.render().el);
            },

            doDelete: function () {
                this.model.destroy({
                    success:function () {
                        document.location.href = '#home';
                    }
                });
                return false;
            }

        });
});