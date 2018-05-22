import { Exercise } from "./exercise";

export class Training {
    date: Date;
    exercises: Exercise[];

    static create(): Training {
        return {
            date: null,
            exercises: []
        }
    }
}