import { Component, OnInit } from '@angular/core';
import { Training } from "../types/training";
import { MatDialog } from "@angular/material";
import { AddExerciseComponent } from "../add-exercise/add-exercise.component";
import { TrainingsService } from "../services/trainings.service";
import { Location } from "@angular/common";
import { Exercise } from '../types/exercise';

@Component({
	selector: 'app-create-training',
	templateUrl: './create-training.component.html',
	styleUrls: ['./create-training.component.css']
})
export class CreateTrainingComponent implements OnInit {

	training: Training;
	isMobile: Boolean = this.checkSize();

	constructor(
		public dialog: MatDialog,
		public TrainingsService: TrainingsService,
		public location: Location
	) { }

	ngOnInit() {
		this.training = this.TrainingsService.selectedTraining || new Training();
		this.TrainingsService.selectedTraining = null;
		window.addEventListener('resize', e => this.isMobile = this.checkSize());
	}

	checkSize() {
		return innerWidth < 600;
	}

	addExercise() {
		this.openDialog(null);
	}

	finalize() {
		if (!this.TrainingsService.trainings.includes(this.training)) {
			this.TrainingsService.trainings.push(this.training);
		}
		this.location.back();
	}

	cancelar() {
		this.location.back();
	}

	edit(ex) {
		this.openDialog(ex);
	}

	delete(ex) {
		this.training
			.exercises
			.splice(this.training.exercises.indexOf(ex), 1);
	}

	openDialog(ex: Exercise) {

		this.dialog.open(AddExerciseComponent, { data: ex })
			.afterClosed()
			.subscribe(result => {
				if (!result) return;
				if (!this.training.exercises.includes(result)) {
					this.training.exercises.push(result)
				}
			});
	}

}
