import { Component, OnInit } from '@angular/core';
import { Training } from "../types/training";
import { MatDialog } from "@angular/material";
import { AddExerciseComponent } from "../add-exercise/add-exercise.component";

@Component({
  selector: 'app-create-training',
  templateUrl: './create-training.component.html',
  styleUrls: ['./create-training.component.css']
})
export class CreateTrainingComponent implements OnInit {

  training: Training;
  isMobile: Boolean = this.checkSize();

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.training = new Training();
    window.addEventListener('resize', e => this.isMobile = this.checkSize());
  }

  checkSize(){
    return innerWidth < 600;
  }
  
  addExercise(){
    this.dialog.open(AddExerciseComponent)
      .afterClosed()
      .subscribe(result => {
        if(!result) return;
        this.training.exercises.push(result)
      });
  }

}
