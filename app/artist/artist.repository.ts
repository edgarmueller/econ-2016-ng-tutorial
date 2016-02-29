/// <reference path="../_references.ts" />

class ArtistRepository extends InMemoryRepository<Artist> { }

angular
    .module('econTutorial').service('ArtistRepository', ArtistRepository)
    .run(['ArtistRepository', (repo) => {
        repo.create(new Artist("Amy Winehouse", "app/images/artist/winehouse.jpg"));
        repo.create(new Artist("Portishead", "app/images/artist/portishead.jpg"));
        repo.create(new Artist("The Velvet Underground", "app/images/artist/the-velvet-underground.jpg"));
        repo.create(new Artist("Roxy Music", "app/images/artist/roxy-music.jpg"));
        repo.create(new Artist("The Doors", "app/images/artist/the-doors.jpg"));
    }]);
