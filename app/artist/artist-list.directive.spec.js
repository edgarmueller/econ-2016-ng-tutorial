/// <reference path="../_references.ts"/>
describe('The artist list directive', function () {
    // load all necessary modules and templates
    beforeEach(angular.mock.module('econTutorial'));
    it("should display all artists as an unordered list", inject(function ($rootScope, $compile) {
        var scope = $rootScope.$new();
        var el = $compile('<artist-list></artist-list>')(scope);
        scope.$digest();
        var headings = el.find('h2');
        // we got 5 artists
        expect(headings.length).toBe(5);
    }));
});
//# sourceMappingURL=artist-list.directive.spec.js.map