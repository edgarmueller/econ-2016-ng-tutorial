describe('The album list directive', function () {
    beforeEach(angular.mock.module('econTutorial'));
    it("should display all albums of an artist together with the tracklist", inject(function ($rootScope, $compile) {
        var scope = $rootScope.$new();
        var el = $compile('<album-list artist-id="1">')(scope);
        scope.$digest();
        var li = el.find('ol').find('li');
        expect(li.length).toBe(13);
    }));
});
//# sourceMappingURL=album-list.directive.spec.js.map