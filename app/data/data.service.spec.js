/// <reference path="../_references.ts"/>
describe('The data service', function () {
    var dataService;
    // load all necessary modules and templates
    beforeEach(angular.mock.module('econTutorial'));
    beforeEach(angular.mock.inject(function (DataService) {
        dataService = DataService;
    }));
    it("should return a non-empty list of all artists", function () {
        expect(dataService.artists).toBeDefined();
        expect(dataService.artists.length).toBe(5);
    });
    it("should allow to filter an artist's albums", function () {
        var albums = dataService.albums.filter(function (a) { return a.artistId == 1; });
        expect(albums.length).toBe(1);
    });
    it("should allow to retrieve a list of all artists' names", function () {
        var artistNames = dataService.artists.map(function (a) { return a.name; });
        expect(artistNames.length).toBe(5);
        expect(artistNames).toContain("Amy Winehouse");
    });
});
//# sourceMappingURL=data.service.spec.js.map