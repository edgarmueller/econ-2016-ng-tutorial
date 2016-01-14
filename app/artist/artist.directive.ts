/// <reference path='../_references.ts' />

class ArtistDirective implements ng.IDirective {

    restrict = 'E';

    template = `<div ng-repeat='artist in artists'>
      <li>{{artist.name}}</li>
    </div>`;

    link = (scope, element, attributes) => {
        scope.artists = this.dataService.artists;
    };

    constructor(private dataService: DataService) {
    }
}

angular.module('econTutorial')
    .directive('artistList', ['DataService', (DataService) => {
        return new ArtistDirective(DataService);
    }]);
