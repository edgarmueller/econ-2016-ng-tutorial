/// <reference path='../_references.ts' />

interface IAlbumResourceDef extends angular.resource.IResource<Album> {}
interface IAlbumResource extends angular.resource.IResourceClass<IAlbumResourceDef> {}
//interface IArtistResourceDef extends angular.resource.IResource<Artist> {}

class AlbumResource {

    private albumsResource;

    constructor(private $resource: angular.resource.IResourceService) {
        this.albumsResource = this.$resource('/albums/:id', { id: '@id' }, { });
    }

    getResource(): IAlbumResource {
        return this.albumsResource;
    }
}


//angular.module('econTutorial')
//    .service('AlbumRepository', ['$resource', ($resource: angular.resource.IResourceService) => new AlbumResource($resource)]);
