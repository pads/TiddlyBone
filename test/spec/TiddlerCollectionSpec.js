describe('Tiddler Collection Tests', function () {

    var TiddlerModel;
    var TiddlerCollection;

    beforeEach(function () {

        TiddlerModel = require('tiddlerModel');
        TiddlerCollection = require('tiddlerCollection');
    });

    it('should use the tiddler model', function () {

        var tiddlerCollectionInstance = new TiddlerCollection();

        expect(tiddlerCollectionInstance.model).toEqual(TiddlerModel);
    });

    it('should point to the correct bag URL', function () {

        var tiddlerCollectionInstance = new TiddlerCollection();

        expect(tiddlerCollectionInstance.url).toEqual('/bags/test_private/tiddlers');
    });


});
