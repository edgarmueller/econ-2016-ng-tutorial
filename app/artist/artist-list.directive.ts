
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
    .directive('artistList', () => new ArtistListDirective());
