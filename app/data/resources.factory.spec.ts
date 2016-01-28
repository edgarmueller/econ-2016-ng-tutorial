/// <reference path="../_references.ts"/>

describe('The data service', () => {

    var resources: Resources;
    var $httpBackend: ng.IHttpBackendService;

    // load all necessary modules and templates
    beforeEach(angular.mock.module('econTutorial'));

    // inject services
    beforeEach(angular.mock.inject((Resources) => {
        resources = Resources;
    }));
    beforeEach(inject(function(_$httpBackend_) {
        $httpBackend = _$httpBackend_;
    }));

    it("should return a non-empty list of all artists", () => {
        let amy = new Artist("Amy Winehouse", 0);
        $httpBackend.whenGET('/artists').respond([amy]);
        $httpBackend.expectGET("/artists");

        let artists = resources.allArtists();
        $httpBackend.flush();
        expect(angular.equals(artists[0], amy)).toBe(true);
    });
});

