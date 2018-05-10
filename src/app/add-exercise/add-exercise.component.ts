import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material";
import { Exercise } from "../types/exercise";
import { ExcercisesService } from "../services/excercises.service";

@Component({
	selector: 'app-add-exercise',
	templateUrl: './add-exercise.component.html',
	styleUrls: ['./add-exercise.component.css']
})
export class AddExerciseComponent implements OnInit {

	exercise: Exercise;
	types: string[];
	exTypes: any;

	constructor(
		public ref: MatDialogRef<AddExerciseComponent>,
		public ExcercisesService: ExcercisesService
	) { }

	ngOnInit() {
		this.exercise = new Exercise();

		this.ExcercisesService.getExercises()
			.subscribe(exTypes => {
				this.exTypes = exTypes;
				this.types = Object.keys(this.exTypes);
			});
	}

	close() {
		this.ref.close(this.exercise);
	}

	onSubmit() {
		console.log('Submeteu');
		this.close();
	}

}
