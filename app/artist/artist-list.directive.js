/// <reference path='../_references.ts' />
var ArtistListDirective = (function () {
    function ArtistListDirective(dataService) {
        var _this = this;
        this.dataService = dataService;
        this.restrict = 'E';
        this.template = "<div ng-repeat='artist in artists'>\n      <li>{{artist.name}}</li>\n      <h2>Albums</h2>\n\t  <album-list artist-id=\"artist.id\"></album-list>\n    </div>";
        this.link = function (scope, element, attributes) {
            scope.artists = _this.dataService.artists;
        };
    }
    return ArtistListDirective;
})();
angular.module('econTutorial')
    .directive('artistList', ['DataService', function (DataService) {
        return new ArtistListDirective(DataService);
    }]);
//# sourceMappingURL=artist-list.directive.js.map