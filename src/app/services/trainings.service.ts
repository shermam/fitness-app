import { Injectable } from '@angular/core';
import { Training } from "../types/training";
import { UserService } from './user.service';
import { Observable } from "rxjs/Observable";
import { FirestoreService } from './firestore.service';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { UserDoc } from '../types/userDoc';

@Injectable({
	providedIn: 'root'
})
export class TrainingsService {

	trainings: Training[];
	user: UserDoc
	selectedTraining: Training;

	constructor(
		public userService: UserService,
		public firestoreService: FirestoreService
	) {
		userService.getUser()
			.subscribe(user => {
				this.user = user;
				this.trainings = user.trainings.map(t => {
					t.date = (<any>t).date.toDate();
					return t;
				});
			});
		// this.trainings.push({
		// 	date: new Date,
		// 	exercises: [
		// 		{
		// 			name: 'Abdução de pernas',
		// 			series: 3,
		// 			repetitions: 12,
		// 			restSeconds: 5,
		// 			type: 'superiores',
		// 			plays: []
		// 		},
		// 		{
		// 			name: 'Barra fixa com pegada aberta',
		// 			series: 4,
		// 			repetitions: 12,
		// 			restSeconds: 6,
		// 			type: 'superiores',
		// 			plays: []
		// 		},
		// 		{
		// 			name: 'Puxada alta pela frente',
		// 			series: 5,
		// 			repetitions: 12,
		// 			restSeconds: 7,
		// 			type: 'inferiores',
		// 			plays: []
		// 		}
		// 	]
		// });

		// this.selectedTraining = this.trainings[0];
	}

	update() {
		this.user.trainings = this.trainings;

		this.userService.update(this.user);
	}

}
