var AlbumListDirective = (function () {
    function AlbumListDirective(repo) {
        var _this = this;
        this.repo = repo;
        this.restrict = 'E';
        this.template = "<ul ng-repeat='album in albums'>\n      <li>\n          {{album.name}}\n          <ol>\n            <li ng-repeat=\"song in album.tracks\">\n              {{song}}\n            </li>  \n          </ol>  \n      </li>\n    </ul>";
        this.scope = {
            artistId: "="
        };
        this.link = function (scope, element, attributes) {
            var artistId = scope.artistId;
            scope.albums = _this.repo.findById(artistId);
        };
    }
    return AlbumListDirective;
})();
angular.module('econTutorial')
    .directive('albumList', ['DataService', function (DataService) {
        return new AlbumListDirective(DataService);
    }]);
//# sourceMappingURL=album-list.directive.js.map