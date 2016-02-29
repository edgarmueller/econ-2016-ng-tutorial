/// <reference path="../_references.ts" />

class AlbumListDirectiveController {
    public artistId: number;
    constructor(private repo: AlbumRepository) {}
    getAlbums(): Album[] {
        return this.repo.getAll().filter(album => album.artistId == this.artistId);
    }
}

class AlbumListDirective implements ng.IDirective {

    restrict: string = 'E';

    // to reference the controller's properties in the template
    controllerAs: string = 'vm';

    // type refinement, otherwise we'll get an compile error in the constructor while assigning the controller
    controller = 'AlbumListDirectiveController';

    template: string = `<div ng-repeat="album in vm.getAlbums()">
      <h2>{{album.name}}</h2>
      <ol>
        <li ng-repeat="track in album.tracks">
          {{track}}
        </li>
      </ol>
    </div>`;

    bindToController: Object = {
        'artistId': '@'
    };
}

angular.module('econTutorial')
    .directive('albumList', ['AlbumRepository', () => new AlbumListDirective()])
    .controller('AlbumListDirectiveController', ['AlbumRepository', (albumRepo: AlbumRepository) =>
        new AlbumListDirectiveController(albumRepo)]);
