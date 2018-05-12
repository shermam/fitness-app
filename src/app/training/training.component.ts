import { Component, OnInit } from '@angular/core';
import { TrainingsService } from "../services/trainings.service";

@Component({
	selector: 'app-training',
	templateUrl: './training.component.html',
	styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

	constructor(
		public TrainingsService: TrainingsService
	) { }

	ngOnInit() {
	}

	edit(t) {
		this.TrainingsService.selectedTraining = t;
	}

}
