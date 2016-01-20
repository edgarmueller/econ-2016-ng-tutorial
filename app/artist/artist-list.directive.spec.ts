/// <reference path="../_references.ts"/>

describe('The artist list directive', () => {

    // load all necessary modules and templates
    beforeEach(angular.mock.module('econTutorial'));

    it("should display all artists as an unordered list", inject(($rootScope, $compile) => {
        let scope = $rootScope.$new();
        var el = $compile('<artist-list></artist-list>')(scope);
        scope.$digest();
        let headings = el.find('h2');
        // we got 5 artists
        expect(headings.length).toBe(5);
    }))
});