/// <reference path='../_references.ts' />
var Resources = (function () {
    function Resources($resource) {
        this.$resource = $resource;
        this.albumsResource = this.$resource('/albums/:id', { id: '@id' }, {});
        this.artistsResource = this.$resource('/artists/:id', { id: '@id' }, {});
    }
    Resources.prototype.allArtists = function () {
        return this.artistsResource.query();
    };
    return Resources;
})();
angular.module('econTutorial') //, ['ngResource'])
    .service('Resources', ['$resource', function ($resource) { return new Resources($resource); }]);
//# sourceMappingURL=resources.factory.js.map