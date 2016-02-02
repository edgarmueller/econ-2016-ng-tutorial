/// <reference path='../_references.ts' />

class ArtistRepository extends InMemoryRepository<Artist> {

    fillWithSampleData() {
        this.create(new Artist("Amy Winehouse",          "app/images/artist/winehouse.jpg"));
        this.create(new Artist("Portishead",             "app/images/artist/portishead.jpg"));
        this.create(new Artist("The Velvet Underground", "app/images/artist/the-velvet-underground.jpg"));
        this.create(new Artist("Roxy Music",             "app/images/artist/roxy-music.jpg"));
        this.create(new Artist("The Doors",              "app/images/artist/the-doors.jpg"));
    }

}

angular.module('econTutorial').service('ArtistRepository', ArtistRepository);
