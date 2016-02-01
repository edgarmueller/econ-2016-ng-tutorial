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
        artistRepo.all().then((result) =>
            expect(result.length).toBe(1)
        );
    });

    it("should support finding artists by their ID", () => {
        artistRepo.create(amy);
        artistRepo.findById(0).then((result) => {
            expect(result).toBeDefined();
        });
        artistRepo.findById(1).then((result) => {
            expect(result).toBeUndefined()
        });
    });

    it("should support updating artists", () => {
        artistRepo.create(amy);
        let promise1 = artistRepo.findById(0);
        var promise2;
        promise1.then((a) => {
            a.name = "Amy Jade Winehouse";
            artistRepo.update(a);
            promise2 = artistRepo.findById(0);
            promise2.then((result) => {
                expect(result.name).toBe("Amy Jade Winehouse");
            });
        });
    });


    it("should allow removing artists by their ID", () => {
        artistRepo.create(amy);
        expect(artistRepo.removeById(0)).toBeTruthy();
        artistRepo.all().then((result) => {
            expect(result.length).toBe(0)
        });
    });

    it("should allow filtering artists by part of their name", () => {
        // TODO: implement findByName
        artistRepo.create(new Artist("The Doors"));
        artistRepo.create(new Artist("The Smiths"));
        artistRepo.create(new Artist("The Strokes"));
        artistRepo.create(new Artist("The Beatles"));
        artistRepo.create(new Artist("Miley Cyrus"));
        artistRepo.filterByName("The").then((filtered) => {
            expect(filtered.length).toBe(4);
        });
    });
});

