/// <reference path="../_references.ts"/>

describe('The data service', () => {

    var dataService;

    // load all necessary modules and templates
    beforeEach(angular.mock.module('econTutorial'));
    beforeEach(angular.mock.inject((DataService) => {
        dataService = DataService;
    }));


    it("should return a non-empty list of all artists", () => {
        expect(dataService.artists).toBeDefined();
        expect(dataService.artists.length).toBe(5);
    });

    it("should allow to filter an artist's albums", () => {
        let albums = dataService.albums.filter((a) => { return a.artistId  == 1 });
        expect(albums.length).toBe(1);
    });

    it("should allow to retrieve a list of all artists' names", () => {
        let artistNames = dataService.artists.map((a) => a.name);
        expect(artistNames.length).toBe(5);
        expect(artistNames).toContain("Amy Winehouse");
    });
});  

