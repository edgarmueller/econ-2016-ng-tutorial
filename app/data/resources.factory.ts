/// <reference path='../_references.ts' />

interface IAlbumResourceDef extends angular.resource.IResource<Album> {}
interface IAlbumResource extends angular.resource.IResourceClass<IAlbumResourceDef> {}

interface IArtistResourceDef extends angular.resource.IResource<Artist> {}
interface IArtistResource extends angular.resource.IResourceClass<IArtistResourceDef> {}

class Resources {

    private albumsResource;
    private artistsResource;

    constructor(private $resource: angular.resource.IResourceService) {
        this.albumsResource = this.$resource('/albums/:id', { id: '@id' }, { });
        this.artistsResource = this.$resource('/artists/:id', { id: '@id' }, { });
    }

    public allArtists()  {
        return this.artistsResource.query();
    }
}


angular.module('econTutorial') //, ['ngResource'])
    .service('Resources', ['$resource', ($resource: angular.resource.IResourceService) => new Resources($resource)]);

