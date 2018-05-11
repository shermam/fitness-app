import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material";
import { Exercise } from "../types/exercise";
import { ExcercisesService } from "../services/excercises.service";
import { ExerciseType } from "../types/exerciseTypes";

@Component({
	selector: 'app-add-exercise',
	templateUrl: './add-exercise.component.html',
	styleUrls: ['./add-exercise.component.css']
})
export class AddExerciseComponent implements OnInit {

	exercise: Exercise;
	exTypes: ExerciseType[];

	constructor(
		public ref: MatDialogRef<AddExerciseComponent>,
		public ExcercisesService: ExcercisesService
	) { }

	ngOnInit() {
		this.exercise = new Exercise();

		this.ExcercisesService.getExercises()
			.subscribe(exTypes => {
				this.exTypes = exTypes;
			});
	}

	close() {
		this.ref.close(this.exercise);
	}

	onSubmit() {
		console.log('Submeteu');
		this.close();
	}

	get exercises() {
		if (!this.exercise.type) return [];
		return this.exTypes
			.find(t => t.name === this.exercise.type)
			.exercises;
	}

}
