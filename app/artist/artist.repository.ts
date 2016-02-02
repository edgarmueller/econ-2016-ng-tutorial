/// <reference path='../_references.ts' />

class ArtistRepository extends InMemoryRepository<Artist> {

    fillWithSampleData() {
        this.entities.create(new Artist("Amy Winehouse",          "images/artists/winehouse.jpg"));
        this.entities.create(new Artist("Portishead",             "images/artists/portishead"));
        this.entities.create(new Artist("The Velvet Underground", "images/artists/the-velvet-underground.jpg"));
        this.entities.create(new Artist("Roxy Music",             "images/artists/roxy-music.jpg"));
        this.entities.create(new Artist("The Doors",              "images/artists/the-doors.jpg"));
    }

}

angular.module('econTutorial').service('ArtistRepository', ArtistRepository);
