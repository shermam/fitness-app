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

	isMobile: Boolean = this.checkSize();

	constructor(
		public dialog: MatDialog,
		public TrainingsService: TrainingsService,
		public location: Location
	) { }

	ngOnInit() {
		this.TrainingsService.selectedTraining = this.TrainingsService.selectedTraining || Training.create();
		window.addEventListener('resize', e => this.isMobile = this.checkSize());
	}

	checkSize() {
		return innerWidth < 600;
	}

	addExercise() {
		this.openDialog(null);
	}

	finalize() {
		if (!this.TrainingsService.trainings.includes(this.TrainingsService.selectedTraining)) {
			this.TrainingsService.trainings.push(this.TrainingsService.selectedTraining);
		}

		this.TrainingsService.update();
		this.location.back();
	}

	cancelar() {
		this.location.back();
	}

	edit(ex) {
		this.openDialog(ex);
	}

	delete(ex) {
		this.TrainingsService.selectedTraining
			.exercises
			.splice(this.TrainingsService.selectedTraining.exercises.indexOf(ex), 1);
	}

	openDialog(ex: Exercise) {

		this.dialog.open(AddExerciseComponent, { data: ex })
			.afterClosed()
			.subscribe(result => {
				if (!result) return;
				if (!this.TrainingsService.selectedTraining.exercises.includes(result)) {
					this.TrainingsService.selectedTraining.exercises.push(result)
				}
			});
	}

}
