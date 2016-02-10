/// <reference path='../_references.ts' />

class ArtistRepository extends InMemoryRepository<Artist> { }

angular.module('econTutorial').service('ArtistRepository', ArtistRepository);
