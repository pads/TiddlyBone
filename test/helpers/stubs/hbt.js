define('hbt', ['jquery', 'handlebars'], function ($, Handlebars) {

    return {
        load: function(name, require, callback, config) {
            $.ajax({
                url: '/assets/' + name + '.html',
                async: false,
                type: "GET",
                contentType: "text/html",
                success: function(data) {
                    callback(Handlebars.compile(data));
                }
            });
        }
    };

});