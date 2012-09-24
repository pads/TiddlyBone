define(['backbone'], function (Backbone) {

    var StatusModel = Backbone.Model.extend({
        urlRoot: '/status'
    });

    var status = new StatusModel();
    status.fetch({ async: false });
    return status;

});