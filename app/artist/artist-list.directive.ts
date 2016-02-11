
/// <reference path='../_references.ts' />

class ArtistListDirectiveController {

    static $inject = ['ArtistRepository'];

    constructor(private repo: ArtistRepository) { }

    getArtists() {
        return this.repo.getAll();
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
    .directive('artistList', () => new ArtistListDirective());

