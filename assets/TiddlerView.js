define(['jquery', 'backbone', 'tiddlerFormView', 'hbt!Tiddler'],
    function ($, Backbone, TiddlerFormView, template) {
        return Backbone.View.extend({

            events: {
                'click .edit-button': 'edit',
                'click .delete-button': 'doDelete'
            },

            render: function () {
                $(this.el).html(template(this.model.toJSON()));
                return this;
            },

            edit: function () {
                this.newTiddlerForm = new TiddlerFormView({ model: this.model });
                $('section').html(this.newTiddlerForm.render().el);

                //TODO: this is a bad way to trick Backbone into reloading this view when edit is finished.
                document.location.href = '#editTiddler/' + this.model.get('title');
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