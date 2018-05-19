import { Component, OnInit } from '@angular/core';
import { TrainingsService } from "../services/trainings.service";
import { Training } from '../types/training';
import { Play } from "../types/Play";

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
	plays: Play[] = [];

	constructor(
		public TrainingsService: TrainingsService
	) { }

	ngOnInit() {
		this.training.exercises.forEach(exercise => {
			const play = new Play;
			exercise.plays = exercise.plays || [];
			exercise.plays.push(play);
			this.plays.push(play);
		});
	}

	get series() {
		let size = this.training.exercises[this.index].series;

		return new Array(size)
			.fill(0)
			.map((v, i) => ++i);
	}

	get currentSerie() {
		return this.plays[this.index].currentSerie;
	}

	get disableToggleButton() {
		return this.plays[this.index].currentSerie >=
			this.training.exercises[this.index].series;
	}

	get btnText() {
		if (this.plays[this.index].currentSerie >=
			this.training.exercises[this.index].series) {
			return "Concluído";
		}

		if (this.started) {
			return "Descanso";
		}

		return "Iniciar";
	}

	reset() {
		this.count = 0;
		this.started = false;
		clearInterval(this.interval);
	}

	previous() {
		this.index--;
		this.reset();
	}

	next() {
		this.index++;
		this.reset();
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
		clearInterval(this.interval);
		this.count = 0;
		this.interval = setInterval(_ => {
			this.count++;
		}, 1000);
	}

	stop() {
		this.plays[this.index].currentSerie++;
		clearInterval(this.interval);

		if (this.plays[this.index].currentSerie >= this.training.exercises[this.index].series) {
			this.count = 0;
			return;
		}

		this.count = this.training.exercises[this.index].restSeconds;
		this.interval = setInterval(_ => {
			this.count--;
		}, 1000);
	}

}
