/// <reference path="../_references.ts" />

class Album {

    constructor(
        public artistId: number,
        public name: string,
        public tracks: string[],
        public id?: number,
        public year?: number) {
    }
}