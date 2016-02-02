/// <reference path='../_references.ts' />
var ArtistListDirective = (function () {
    function ArtistListDirective(repo) {
        var _this = this;
        this.repo = repo;
        this.restrict = 'E';
        // TODO: exercise 2
        this.template = "???";
        this.link = function (scope, element, attributes) {
            scope.artists = _this.repo.all();
        };
    }
    return ArtistListDirective;
})();
angular.module('econTutorial')
    .directive('artistList', ['ArtistRepository', function (ArtistRepository) {
        return new ArtistListDirective(ArtistRepository);
    }]);
//# sourceMappingURL=artist-list.directive.js.map