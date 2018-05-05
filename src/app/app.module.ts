import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { environment } from "../environments/environment";

import { 
  MatToolbarModule, 
  MatButtonModule, 
  MatStepperModule 
} from "@angular/material";

import { ExcercisesService } from "./services/excercises.service";

import { AppComponent } from './app.component';
import { FitNavigationComponent } from './fit-navigation/fit-navigation.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { TrainingComponent } from './training/training.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { CreateTrainingComponent } from './create-training/create-training.component';

@NgModule({
  declarations: [
    AppComponent,
    FitNavigationComponent,
    ExercisesComponent,
    TrainingComponent,
    CreateTrainingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    MatToolbarModule,
    MatButtonModule,
    AppRoutingModule,
    MatStepperModule
  ],
  providers: [
    ExcercisesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
