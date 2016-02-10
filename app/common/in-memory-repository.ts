/// <reference path='../_references.ts' />

abstract class InMemoryRepository<ENTITY extends CommonEntity> implements IRepository<ENTITY> {

    protected entities;
    protected currentId = 0;

    constructor() {
        this.entities = [];
    }

    clear(): void {
        this.entities = [];
        this.currentId = 0;
    }

    all(): ENTITY[] {
        let result = [];
        for (let entity of this.entities) {
            result.push(entity);
        }
        return result;
    }

    update(entity: ENTITY): void {
        let foundEntity = this.findById(entity.id);
        if (foundEntity == undefined) {
            return;
        } else {
            let index = this.entities.indexOf(foundEntity);
            this.entities[index] = entity;
        }
    }

    findById(id: number): ENTITY {
        return this.entities.find(e => e.id == id);
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
            let index = this.entities.indexOf(foundEntity);
            this.entities.splice(index, 1);
            return true;
        }
    }

    findByName(name: string): ENTITY[] {
        // FIXME
        return [];
    }
}