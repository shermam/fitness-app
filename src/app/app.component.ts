import { Component, OnInit } from '@angular/core';
import { ExcercisesService } from "./services/excercises.service";
import { Exercises } from "./types/exercises";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  exercises: Exercises;

  constructor(
    public ExcercisesService: ExcercisesService
  ){}

  ngOnInit(){
    this.getExercises();
  }

  getExercises(): void{
    this.ExcercisesService
      .getExercises()
      .subscribe(e => {
        this.exercises = e
      });
  }
}
