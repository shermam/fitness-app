import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { ExercisesComponent } from "../exercises/exercises.component";
import { CreateTrainingComponent } from "../create-training/create-training.component";
import { TrainingComponent } from "../training/training.component";
import { PlayTrainingComponent } from "../play-training/play-training.component";

const routes: Routes = [
  { path: '', component: TrainingComponent },
  { path: 'exercises', component: ExercisesComponent },
  { path: 'create-traing', component: CreateTrainingComponent },
  { path: 'play', component: PlayTrainingComponent },
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
