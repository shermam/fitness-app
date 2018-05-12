import { Injectable } from '@angular/core';
import { Training } from "../types/training";

@Injectable({
	providedIn: 'root'
})
export class TrainingsService {

	trainings: Training[] = [];
	selectedTraining: Training;

	constructor() {
		this.trainings.push({
			date: new Date,
			exercises: [
				{
					name: 'Abdução de pernas',
					series: 3,
					repetitions: 12,
					restSeconds: 30,
					type: 'inferiores'
				}
			]
		});

		this.selectedTraining = this.trainings[0];
	}

}
