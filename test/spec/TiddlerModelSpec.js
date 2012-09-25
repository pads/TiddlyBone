describe('Tiddler Model Tests', function () {

    it('should be created with the correct default attributes set', function () {
        var tiddlerModel = new TiddlerModel();
        expect(tiddlerModel.get('title')).toEqual('New Tiddler');
    });

});
