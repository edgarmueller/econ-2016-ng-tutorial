/// <reference path="../_references.ts"/>

describe('The Artist repository', () => {

    var artistRepo: ArtistRepository;

    // load all necessary modules and inject service to be tested
    beforeEach(angular.mock.module('econTutorial'));
    beforeEach(angular.mock.inject((ArtistRepository) => {
        artistRepo = ArtistRepository;
        artistRepo.clear();
    }));

    let amy = new Artist("Amy Winehouse");

    it("should support creating new artists", () => {
        artistRepo.create(amy);
        expect(artistRepo.all().length).toBe(1);
    });

    it("should support finding artists by their ID", () => {
        artistRepo.create(amy);
        expect(artistRepo.findById(0)).toBeDefined();
        expect(artistRepo.findById(1)).toBeUndefined();
    });

    // FIXME
    it("should support updating artists", () => {
        artistRepo.create(amy);
        let a = artistRepo.findById(0);
        a.name = "Amy Jade Winehouse";
        artistRepo.update(amy);
        expect(artistRepo.findById(0)).toBe("Amy Jade Winehouse");
    });


    // FIXME
    it("should allow removing artists by their ID", () => {
        artistRepo.create(amy);
        expect(artistRepo.removeById(0)).toBeFalsy();
        expect(artistRepo.all().length).toBe(0);
    });

    // FIXME implement findByName
    it("should allow filtering artists by part of their name", () => {
        artistRepo.fillWithSampleData();
        expect(false).toBeTruthy();
        //expect(artistRepo.findByName("The").length).toBe(2);
    });
});

