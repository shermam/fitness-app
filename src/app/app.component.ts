import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { User } from '@firebase/auth-types';
import { ExcercisesService } from "./services/excercises.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  user: User = null;
  exercises: String[] = [];

  constructor(
    public auth: AngularFireAuth,
    public ExcercisesService: ExcercisesService
  ){}

  ngOnInit(){
    this.authenticate();
    this.getExercises();
  }

  authenticate(): void{
    this.auth.authState.subscribe((user: User) => {
      if (!user) {
        this.auth.auth.signInAnonymously();
      }
      this.user = user;
    });
  }

  getExercises(): void{
    this.ExcercisesService
      .getExercises()
      .subscribe(e => {
        this.exercises = e
      });
  }
}
