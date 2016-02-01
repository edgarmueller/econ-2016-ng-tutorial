/// <reference path='../_references.ts' />

interface IArtistResourceDef extends angular.resource.IResource<Artist> {}
interface IArtistResource extends angular.resource.IResourceClass<IArtistResourceDef> {}

class ArtistResource implements IRepository<Artist> {

    private artistResource;

    constructor(private $resource: angular.resource.IResourceService) {
        this.artistResource = this.$resource('/artists/:id', { id: '@id' }, { });
    }

    all(): ng.IPromise<Artist[]> {
        return this.artistResource.query().$promise;
    }

    update(artist: Artist):void {
        return this.artistResource.save(artist).$promise;
    }

    findById(id:number): ng.IPromise<Artist> {
        return this.artistResource.get(id).$promise;
    }

    create(artist:Artist):void {
        return this.artistResource.save(artist).$promise;
    }

    removeById(id:number): ng.IPromise<boolean> {
        return this.artistResource.remove(id);
    }
}


angular.module('econTutorial')
    .service('ArtistRepository', ['$resource', ($resource: angular.resource.IResourceService) => new ArtistResource($resource)]);
