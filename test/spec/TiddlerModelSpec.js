describe('Tiddler Model Tests', function () {

    it('should be created with the correct default attributes set', function () {
        var mockStatus = {
            attributes: {
                space: {
                    recipe: 'test_public'
                }
            }
        };
        var TiddlerModel = testr('tiddlerModel', {'backbone': Backbone, 'status': mockStatus });

        var tiddlerInstance = new TiddlerModel();
        expect(tiddlerInstance.get('title')).toEqual('New Tiddler');
    });

});
