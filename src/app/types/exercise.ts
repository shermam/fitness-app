import { Play } from "./Play";

export class Exercise {
    name: String;
    series: number;
    repetitions: number;
    restSeconds: number;
    type: String;
    plays: Play[];

    static create(): Exercise {
        return {
            name: null,
            series: null,
            repetitions: null,
            restSeconds: null,
            type: null,
            plays: []
        }
    }
}