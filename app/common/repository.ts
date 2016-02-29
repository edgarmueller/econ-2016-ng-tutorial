/// <reference path="../_references.ts" />

/**
 * Common interface for all entities.
 */
interface CommonEntity {
    id?: number
    name: string
}

interface IRepository<T extends CommonEntity> {
    /**
     * Returns all entities of this repository.
     *
     * @return an array containing all entities
     */
    getAll(): T[]

    /**
     * Updates a entity in the repository.
     *
     * @param t the updated entity
     */
    update(t: T): void

    /**
     * Finds the entity with the given ID in the repository.
     *
     * @param id the ID of the entity to be retrieved
     * @return the entity, if found, otherwise undefined
     */
    findById(id: number): T

    /**
     * Creates and adds the given instance to the repository
     *
     * @param t the entity to be added to the repository
     */
    create(t: T): void

    /**
     * Removes the entity with the given ID from the repository.
     *
     * @param id the ID of the entity to be removed
     */
    removeById(id: number): boolean

     /**
     * Finds all entities with a name containing the given search string. 
     * Returns all entities, if the search string is empty or undefined.
     *
     * @param name a name to be searched for, or undefined to return all entities
     * @return an array of entities with a name containing the given search string
     */
    findByName(name: string): T[]
}