/// <reference path="../_references.ts"/>

describe('The Artist repository', () => {

    var artistRepo: ArtistRepository;

    // load all necessary modules and inject service to be tested
    beforeEach(angular.mock.module('econTutorial'));
    beforeEach(angular.mock.inject((ArtistRepository) => {
        artistRepo = ArtistRepository;
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

    it("should support updating artists", () => {
        artistRepo.create(amy);
        let a = artistRepo.findById(0);
        a.name = "Amy Jade Winehouse";
        artistRepo.update(a);
        expect(artistRepo.findById(0).name).toBe("Amy Jade Winehouse");
    });


    it("should allow removing artists by their ID", () => {
        artistRepo.create(amy);
        expect(artistRepo.removeById(0)).toBeTruthy();
        expect(artistRepo.all().length).toBe(0);
    });

    it("should allow filtering artists by part of their name", () => {
        // TODO: implement findByName
        artistRepo.create(new Artist("The Doors"));
        artistRepo.create(new Artist("The Smiths"));
        artistRepo.create(new Artist("The Strokes"));
        artistRepo.create(new Artist("The Beatles"));
        artistRepo.create(new Artist("Miley Cyrus"));
        expect(artistRepo.filterByName("The").length).toBe(4);
    });
});

