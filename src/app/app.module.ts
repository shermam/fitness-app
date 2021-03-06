import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireAuthModule } from "angularfire2/auth";
import { environment } from "../environments/environment";
import { FormsModule } from "@angular/forms";
import { MAT_DATE_LOCALE } from "@angular/material/core";

import {
  MatToolbarModule,
  MatButtonModule,
  MatStepperModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatInputModule,
  MatDialogModule,
  MatSelectModule,
  MatListModule,
  MatIconModule,
  MatTooltipModule
} from "@angular/material";

import { ExcercisesService } from "./services/excercises.service";

import { AppComponent } from './app.component';
import { FitNavigationComponent } from './fit-navigation/fit-navigation.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { TrainingComponent } from './training/training.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { CreateTrainingComponent } from './create-training/create-training.component';
import { AddExerciseComponent } from './add-exercise/add-exercise.component';
import { PlayTrainingComponent } from './play-training/play-training.component';

@NgModule({
  declarations: [
    AppComponent,
    FitNavigationComponent,
    ExercisesComponent,
    TrainingComponent,
    CreateTrainingComponent,
    AddExerciseComponent,
    PlayTrainingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    MatToolbarModule,
    MatButtonModule,
    AppRoutingModule,
    MatStepperModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatSelectModule,
    MatListModule,
    MatIconModule,
    MatTooltipModule,
    AngularFirestoreModule
  ],
  providers: [
    ExcercisesService,
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
  ],
  entryComponents: [
    AddExerciseComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
