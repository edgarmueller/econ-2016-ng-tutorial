/// <reference path='../_references.ts' />

interface HasId {
    id?: number
    name: string
}

interface IRepository<T extends HasId> {
    all(): T[]
    update(t: T): void
    findById(id: number): T
    create(t: T): void
    removeById(id: number): boolean
}