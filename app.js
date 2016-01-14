/// <reference path='_references.ts' />
angular.module('econTutorial', []);
/// <reference path='../_references.ts' />
var Artist = (function () {
    function Artist(name) {
        this.name = name;
    }
    return Artist;
})();
/// <reference path='../_references.ts' />
var DataService = (function () {
    function DataService() {
        this.artists = [
            new Artist("The B52's"),
            new Artist("Amy Winehouse"),
            new Artist("Portishead"),
            new Artist("The Velvet Underground"),
            new Artist("Roxy Music")
        ];
    }
    return DataService;
})();
angular.module('econTutorial').service('DataService', DataService);
/// <reference path='../typings/angularjs/angular.d.ts' />
/// <reference path='app.ts' />
/// <reference path='artist/artist.directive.ts' />
/// <reference path='artist/artist.model.ts' />
/// <reference path='data/data.service.ts' /> 
/// <reference path='../_references.ts' />
var ArtistDirective = (function () {
    function ArtistDirective(dataService) {
        var _this = this;
        this.dataService = dataService;
        this.restrict = 'E';
        this.template = "<div ng-repeat='artist in artists'>\n      <li>{{artist.name}}</li>\n    </div>";
        this.link = function (scope, element, attributes) {
            scope.artists = _this.dataService.artists;
        };
    }
    return ArtistDirective;
})();
angular.module('econTutorial')
    .directive('artistList', ['DataService', function (DataService) {
        return new ArtistDirective(DataService);
    }]);
