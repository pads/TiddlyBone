describe('Tiddler Model Tests', function () {

    var TiddlerModel;

    beforeEach(function () {

        TiddlerModel = require('tiddlerModel');
    });

    it('should be created with the correct default attributes set', function () {

        var tiddlerInstance = new TiddlerModel();

        expect(tiddlerInstance.get('title')).toEqual('New Tiddler');
        expect(tiddlerInstance.get('text')).toEqual('');
        expect(tiddlerInstance.get('tags')).toEqual([]);
        expect(tiddlerInstance.get('fields')).toEqual({});
    });

    it('should point to the correct bag URL', function () {

        var tiddlerInstance = new TiddlerModel();

        expect(tiddlerInstance.urlRoot).toEqual('/bags/test_private/tiddlers');
    });

    it('should use the title attribute as the unique identifier', function () {

        var tiddlerInstance = new TiddlerModel();

        expect(tiddlerInstance.idAttribute).toEqual('title');
    });

});
