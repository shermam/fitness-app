import { Component, OnInit } from '@angular/core';
import { ExcercisesService } from "../services/excercises.service";

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {

  exercises: any;

  constructor(
    public ExcercisesService: ExcercisesService
  ) { }

  ngOnInit() {
    this.getExercises();
  }

  getExercises(): void {
    this.ExcercisesService
      .getExercises()
      .subscribe(e => {
        this.exercises = e
      });
  }

}
