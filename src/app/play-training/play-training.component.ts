import { Component, OnInit } from '@angular/core';
import { TrainingsService } from "../services/trainings.service";
import { Training } from '../types/training';

@Component({
	selector: 'app-play-training',
	templateUrl: './play-training.component.html',
	styleUrls: ['./play-training.component.scss']
})
export class PlayTrainingComponent implements OnInit {

	index: number = 0;
	training: Training = this.TrainingsService.selectedTraining;

	constructor(
		public TrainingsService: TrainingsService
	) { }

	ngOnInit() {
	}

	get series() {
		let size = this.training.exercises[this.index].series;

		return new Array(size)
			.fill(0)
			.map((v, i) => ++i);
	}

}
