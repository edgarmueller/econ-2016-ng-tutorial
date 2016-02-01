/// <reference path="../_references.ts"/>
describe('The data service', () => {

    var repo: ArtistRepository;
    var $httpBackend: ng.IHttpBackendService;

    // load all necessary modules and templates
    beforeEach(angular.mock.module('econTutorial'));

    // inject services
    beforeEach(angular.mock.inject((ArtistRepository) => {
        repo = ArtistRepository;
    }));
    beforeEach(inject(function(_$httpBackend_) {
        $httpBackend = _$httpBackend_;
    }));

    it("should return a non-empty list of all artists", () => {
        let amy = new Artist("Amy Winehouse", 0);
        $httpBackend.whenGET('/artists').respond([amy]);
        $httpBackend.expectGET("/artists");

        repo.all().then((result) => {
            console.log(result);
            expect(result.length).toBe(1);
        });
        $httpBackend.flush();
    });
});
