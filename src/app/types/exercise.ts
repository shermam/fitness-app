import { Play } from "./Play";

export class Exercise {
    name: String;
    series: number;
    repetitions: number;
    restSeconds: number;
    type: String;
    plays: Play[];
}