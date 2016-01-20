/// <reference path='../_references.ts' />

class AlbumListDirective implements ng.IDirective {

    restrict = 'E';

    template = `<ul ng-repeat='album in albums'>
      <li>
          {{album.name}}
          <ol>
            <li ng-repeat="song in album.tracks">
              {{song}}
            </li>  
          </ol>  
      </li>
    </ul>`;
    
    scope = {
        artistId: "="
    };

    link = (scope, element, attributes) => {
        let artistId = scope.artistId;
        scope.albums = this.dataService.albums.filter(a => a.artistId == artistId);
    };

    constructor(private dataService: DataService) { }
}

angular.module('econTutorial')
    .directive('albumList', ['DataService', (DataService) => {
        return new AlbumListDirective(DataService);
    }]);
