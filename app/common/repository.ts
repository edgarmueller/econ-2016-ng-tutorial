/// <reference path='../_references.ts' />

interface CommonEntity {
    id?: number
    name: string
}

interface IRepository<T extends CommonEntity> {
    all(): T[]
    update(t: T): void
    findById(id: number): T
    create(t: T): void
    removeById(id: number): boolean
}