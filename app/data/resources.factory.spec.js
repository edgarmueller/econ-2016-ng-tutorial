/// <reference path="../_references.ts"/>
describe('The data service', function () {
    var resources;
    var $httpBackend;
    // load all necessary modules and templates
    beforeEach(angular.mock.module('econTutorial'));
    // inject services
    beforeEach(angular.mock.inject(function (Resources) {
        resources = Resources;
    }));
    beforeEach(inject(function (_$httpBackend_) {
        $httpBackend = _$httpBackend_;
    }));
    it("should return a non-empty list of all artists", function () {
        var amy = new Artist("Amy Winehouse", 0);
        $httpBackend.whenGET('/artists').respond([amy]);
        $httpBackend.expectGET("/artists");
        var artists = resources.allArtists();
        $httpBackend.flush();
        expect(angular.equals(artists[0], amy)).toBe(true);
    });
});
//# sourceMappingURL=resources.factory.spec.js.map