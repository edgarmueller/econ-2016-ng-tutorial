/// <reference path='../_references.ts' />

class AlbumListDirectiveController {
    public artistId;
    static $inject = ['AlbumRepository'];
    constructor(private repo: AlbumRepository) {}
    albums(): Album[] {
        return this.repo.getAll().filter(album => album.artistId == this.artistId);
    }
}

class AlbumListDirective implements ng.IDirective {

    restrict = 'E';

    // to reference the controller's properties in the template
    controllerAs = 'vm';

    // type refinement, otherwise we'll get an compile error in the constructor while assigning the controller
    controller = 'AlbumListDirectiveController';

    template = `<div ng-repeat="album in vm.albums()">
      <h2>{{album.name}}</h2>
      <ol>
        <li ng-repeat="track in album.tracks">
          {{track}}
        </li>
      </ol>
    </div>`;

    bindToController = {
        'artistId': '='
    };
}

angular.module('econTutorial')
    .directive('albumList', ['AlbumRepository', () => new AlbumListDirective()])
    .controller('AlbumListDirectiveController', AlbumListDirectiveController);
