/// <reference path='../_references.ts' />

class ArtistListDirective implements ng.IDirective {

    restrict = 'E';

    template = `<div ng-repeat='artist in artists'>
      <li>{{artist.name}}</li>
      <h2>Albums</h2>
	  <album-list artist-id="artist.id"></album-list>
    </div>`;

    link = (scope, element, attributes) => {
        scope.artists = this.repo.all();
    };

    constructor(private repo: ArtistRepository) {
    }
}

angular.module('econTutorial')
    .directive('artistList', ['DataService', (DataService) => {
        return new ArtistListDirective(DataService);
    }]);
