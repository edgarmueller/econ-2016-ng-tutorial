/// <reference path='../_references.ts' />

interface HasId {
    id?: number
    name: string
}

interface IRepository<T extends HasId> {
    all(): ng.IPromise<T[]>
    update(t: T): void
    findById(id: number): ng.IPromise<T>
    create(t: T): void
    removeById(id: number): ng.IPromise<boolean>
}