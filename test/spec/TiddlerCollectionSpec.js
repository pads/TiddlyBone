describe('Tiddler Collection Tests', function () {

    var TiddlerModel;
    var TiddlerCollection;

    beforeEach(function () {
        var mockStatus = {
            attributes: {
                space: {
                    recipe: 'test_private'
                }
            }
        };

        var backbone = testr('backbone');
        TiddlerModel = testr('tiddlerModel', {'backbone': backbone, 'status': mockStatus });

        TiddlerCollection = testr('tiddlerCollection', {
            'backbone': Backbone,
            'tiddlerModel': TiddlerModel,
            'status': mockStatus
        });
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
