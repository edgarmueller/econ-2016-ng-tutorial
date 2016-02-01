/// <reference path='../_references.ts' />

abstract class InMemoryRepository<ENTITY extends HasId> implements IRepository<ENTITY> {

    private entities;
    private currentId = 0;

    constructor() {
        this.entities = [];
    }

    // http://stackoverflow.com/questions/728360/most-elegant-way-to-clone-a-javascript-object ported to TS
    clone(obj) {
        var copy;

        // Handle the 3 simple types, and null or undefined
        if (null == obj || "object" != typeof obj) return obj;

        // Handle Date
        if (obj instanceof Date) {
            copy = new Date();
            copy.setTime(obj.getTime());
            return copy;
        }

        // Handle Array
        if (obj instanceof Array) {
            copy = [];
            for (var i = 0, len = obj.length; i < len; i++) {
                copy[i] = this.clone(obj[i]);
            }
            return copy;
        }

        // Handle Object
        if (obj instanceof Object) {
            copy = {};
            for (var attr in obj) {
                if (obj.hasOwnProperty(attr)) copy[attr] = this.clone(obj[attr]);
            }
            return copy;
        }

        throw new Error("Unable to copy obj! Its type isn't supported.");
    }

    clear(): void {
        this.entities = [];
    }

    all(): ENTITY[] {
        let result = [];
        for (let id in this.entities) {
            result.push(this.entities[id]);
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
        this.entities[this.currentId] = this.clone(entity);
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

    filterByName(name: string): ENTITY[] {
        return this.all().filter(e => { return e.name.indexOf(name) >  -1 });
    }
}