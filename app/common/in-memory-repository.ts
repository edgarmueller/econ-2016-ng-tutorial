/// <reference path="../_references.ts" />

abstract class InMemoryRepository<ENTITY extends CommonEntity> implements IRepository<ENTITY> {

    protected entities: ENTITY[];
    protected currentId = 0;

    constructor() {
        this.entities = [];
    }

    clear(): void {
        this.entities = [];
        this.currentId = 0;
    }

    getAll(): ENTITY[] {
        return _.clone(this.entities)
    }

    update(entity: ENTITY): void {
        let foundEntity = this.findById(entity.id);
        if (foundEntity == undefined) {
            return;
        } else {
            let index = this.entities.indexOf(foundEntity);
            this.entities[index] = _.clone(entity);
        }
    }

    findById(id: number): ENTITY {
        return _.clone(_.find(this.entities, (e) => e.id == id));
    }

    create(entity: ENTITY):void {
        entity.id = this.currentId;
        this.entities[this.currentId] = _.clone(entity);
        this.currentId += 1;
    }

    removeById(id: number): boolean {
        let foundEntity = this.findById(id);
        if (foundEntity == undefined) {
            return false;
        } else {
            this.entities = _.remove(this.entities, e => e.id == id);            
            return true;
        }
    }

    /**
     * Finds all entities with a name containing the given search string. 
     * Returns all entities, if the search string is empty or undefined.
     *
     * @param name a name to be searched for, or undefined to return all entities
     * @return an array of entities with a name containing the given search string
     */
    findByName(name: string): ENTITY[] {
        // FIXME
        return [];
    }
}