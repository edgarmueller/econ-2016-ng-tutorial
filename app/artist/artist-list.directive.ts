
/// <reference path='../_references.ts' />

class ArtistListDirectiveController {

    static $inject = ['ArtistRepository'];

    constructor(private repo: ArtistRepository) { }

    getArtists(): Artist[] {
        return this.repo.getAll();
    }
}

class ArtistListDirective implements ng.IDirective {

    restrict: string = 'E';

    controller: string = 'ArtistListDirectiveController';

    controllerAs: string = 'vm';

    // FIXME
    template: string = `FIXME`;
}

angular.module('econTutorial')
    .controller('ArtistListDirectiveController', ArtistListDirectiveController)
    .directive('artistList', () => new ArtistListDirective());

