var ArtistListDirectiveController = (function () {
    function ArtistListDirectiveController(repo) {
        this.repo = repo;
        this.artists = this.repo.all();
    }
    ArtistListDirectiveController.$inject = ['ArtistRepository'];
    return ArtistListDirectiveController;
})();
var ArtistListDirective = (function () {
    function ArtistListDirective() {
        this.restrict = 'E';
        this.controller = 'ArtistListDirectiveController';
        this.controllerAs = 'vm';
        this.template = "FIXME";
    }
    return ArtistListDirective;
})();
angular.module('econTutorial')
    .controller('ArtistListDirectiveController', ArtistListDirectiveController)
    .directive('artistList', function () { return new ArtistListDirective(); })
    .run(['ArtistRepository', function (repo) {
        repo.create(new Artist("Amy Winehouse", "app/images/artist/winehouse.jpg"));
        repo.create(new Artist("Portishead", "app/images/artist/portishead.jpg"));
        repo.create(new Artist("The Velvet Underground", "app/images/artist/the-velvet-underground.jpg"));
        repo.create(new Artist("Roxy Music", "app/images/artist/roxy-music.jpg"));
        repo.create(new Artist("The Doors", "app/images/artist/the-doors.jpg"));
    }]);
//# sourceMappingURL=artist-list.directive.js.map