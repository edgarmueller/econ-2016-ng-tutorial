/// <reference path='../_references.ts' />

class ArtistListDirective implements ng.IDirective {

    restrict = 'E';

    template = `<div ng-repeat='artist in artists'>
      <li>{{artist.name}}</li>
      <h2>Albums</h2>
	  <album-list artist-id="artist.id"></album-list>
    </div>`;

    link = (scope, element, attributes) => {
        scope.artists = this.dataService.artists;
    };

    constructor(private dataService: DataService) {
    }
}

angular.module('econTutorial')
    .directive('artistList', ['DataService', (DataService) => {
        return new ArtistListDirective(DataService);
    }]);
