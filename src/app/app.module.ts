import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { environment } from "../environments/environment";

import { MatToolbarModule, MatButtonModule } from "@angular/material";

import { ExcercisesService } from "./services/excercises.service";

import { AppComponent } from './app.component';
import { FitNavigationComponent } from './fit-navigation/fit-navigation.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { TrainingComponent } from './training/training.component';

@NgModule({
  declarations: [
    AppComponent,
    FitNavigationComponent,
    ExercisesComponent,
    TrainingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [
    ExcercisesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
