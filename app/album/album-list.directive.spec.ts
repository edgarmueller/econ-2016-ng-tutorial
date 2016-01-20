/// <reference path="../_references.ts"/>

describe('The album list directive', () => {

    // load all necessary modules and templates
    beforeEach(angular.mock.module('econTutorial'));

    it("should display all albums of an artist together with the tracklist", inject(($rootScope, $compile) => {
        let scope = $rootScope.$new();
        var el = $compile('<album-list artist-id="1">')(scope);
        scope.$digest();
        let li = el.find('ol').find('li');
        // we got 13 tracks
        expect(li.length).toBe(13);
    }))
});