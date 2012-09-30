describe('Tiddler List Item View Tests', function () {

    var TiddlerModel;
    var TiddlerListItemView;

    beforeEach(function () {
        TiddlerModel = require('tiddlerModel');
        TiddlerListItemView = require('tiddlerListItemView');
    });

    it('should be initialised to a list item element', function () {

        var tiddlerListItemView = new TiddlerListItemView();

        expect(tiddlerListItemView.el.tagName.toLowerCase()).toBe('li');
    });

    it('should render a link to the given tiddler', function () {

        var tiddlerListItemView = new TiddlerListItemView({ model: new TiddlerModel({ title: 'test' }) });

        expect($(tiddlerListItemView.render().el).find('a')).toHaveAttr('href', '#tiddler/test');
    });


});
