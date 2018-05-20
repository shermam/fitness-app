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
					restSeconds: 5,
					type: 'superiores',
					plays: []
				},
				{
					name: 'Barra fixa com pegada aberta',
					series: 4,
					repetitions: 12,
					restSeconds: 6,
					type: 'superiores',
					plays: []
				},
				{
					name: 'Puxada alta pela frente',
					series: 5,
					repetitions: 12,
					restSeconds: 7,
					type: 'inferiores',
					plays: []
				}
			]
		});

		this.selectedTraining = this.trainings[0];
	}

}
