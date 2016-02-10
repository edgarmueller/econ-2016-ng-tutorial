/// <reference path="../_references.ts"/>

describe('The Artist repository', () => {

    var artistRepo: ArtistRepository;

    // load all necessary modules and inject service to be tested
    beforeEach(angular.mock.module('econTutorial'));
    beforeEach(angular.mock.inject((ArtistRepository) => {
        artistRepo = ArtistRepository;
        artistRepo.create(new Artist("Amy Winehouse",          "app/images/artist/winehouse.jpg"));
        artistRepo.create(new Artist("Portishead",             "app/images/artist/portishead.jpg"));
        artistRepo.create(new Artist("The Velvet Underground", "app/images/artist/the-velvet-underground.jpg"));
        artistRepo.create(new Artist("Roxy Music",             "app/images/artist/roxy-music.jpg"));
        artistRepo.create(new Artist("The Doors",              "app/images/artist/the-doors.jpg"));
    }));

    it("should support creating new artists", () => {
        artistRepo.create(new Artist("The Streets"));
        expect(artistRepo.all().length).toBe(6);
    });

    it("should support finding artists by their ID", () => {
        expect(artistRepo.findById(0)).toBeDefined();
        expect(artistRepo.findById(42)).toBeUndefined();
    });

    // FIXME implement findByName
    it("should allow filtering artists by part of their name", () => {
        expect(artistRepo.findByName("The").length).toBe(2);
    });
});

