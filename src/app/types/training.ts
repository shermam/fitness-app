import { Exercise } from "./exercise";

export class Training {

    constructor(){
        this.exercises = [];
    }

    date: Date;
    exercises: Exercise[];
}