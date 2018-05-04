import { Injectable } from '@angular/core';
import { of, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ExcercisesService {

  constructor() { }

  getExercises(): Observable<String[]>{
    return of([
      "teste",
      "outro teste"
    ]);
  }
}
