import { Injectable } from '@angular/core';
import { Training } from "../types/training";

@Injectable({
  providedIn: 'root'
})
export class TrainingsService {

  trainings: Training[] = [];
}
