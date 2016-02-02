/// <reference path='../_references.ts' />

class ArtistListDirective implements ng.IDirective {

    restrict = 'E';

    // TODO: exercise 2
    template = `???`;

    link = (scope, element, attributes) => {
        scope.artists = this.repo.all();
    };

    constructor(private repo: ArtistRepository) {
    }
}

angular.module('econTutorial')
    .directive('artistList', ['ArtistRepository', (ArtistRepository) => {
        return new ArtistListDirective(ArtistRepository);
    }]);
