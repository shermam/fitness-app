import { Component, OnInit } from '@angular/core';
import { TrainingsService } from "../services/trainings.service";
import { Training } from '../types/training';

@Component({
	selector: 'app-play-training',
	templateUrl: './play-training.component.html',
	styleUrls: ['./play-training.component.css']
})
export class PlayTrainingComponent implements OnInit {

	index: number = 0;
	count: number = 0;
	started: Boolean = false;
	interval: any;
	training: Training = this.TrainingsService.selectedTraining;
	btnText: string = "Iniciar Série";

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

	toggle() {
		if (this.started) {
			this.started = false;
			this.stop();
		} else {
			this.started = true;
			this.start();
		}
	}

	start() {
		this.btnText = "Descanso";
		clearInterval(this.interval);
		this.count = 0;
		this.interval = setInterval(_ => {
			this.count++;
		}, 1000);
	}

	stop() {
		this.btnText = "Continuar";
		clearInterval(this.interval);
		this.count = this.training.exercises[this.index].restSeconds;
		this.interval = setInterval(_ => {
			this.count--;
		}, 1000);
	}

}
