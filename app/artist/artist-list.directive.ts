
/// <reference path='../_references.ts' />

class ArtistListDirectiveController {

    public artists: Artist[];
    static $inject = ['ArtistRepository'];

    constructor(private repo: ArtistRepository) {
        this.artists = this.repo.all();
    }
}

class ArtistListDirective implements ng.IDirective {

    restrict = 'E';

    controller = 'ArtistListDirectiveController';

    controllerAs = 'vm';

    // FIXME
    template = `FIXME`;
}

angular.module('econTutorial')
    .controller('ArtistListDirectiveController', ArtistListDirectiveController)
    .directive('artistList', () => new ArtistListDirective())
    .run(['ArtistRepository', (repo) => {
        repo.create(new Artist("Amy Winehouse", "app/images/artist/winehouse.jpg"));
        repo.create(new Artist("Portishead", "app/images/artist/portishead.jpg"));
        repo.create(new Artist("The Velvet Underground", "app/images/artist/the-velvet-underground.jpg"));
        repo.create(new Artist("Roxy Music", "app/images/artist/roxy-music.jpg"));
        repo.create(new Artist("The Doors", "app/images/artist/the-doors.jpg"));
    }]);
