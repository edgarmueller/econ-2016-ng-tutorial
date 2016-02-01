/// <reference path='../_references.ts' />

class AlbumRepository extends InMemoryRepository<Album> { }
angular.module('econTutorial').service('AlbumRepository', AlbumRepository);
