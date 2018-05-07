import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material";

@Component({
  selector: 'app-add-exercise',
  templateUrl: './add-exercise.component.html',
  styleUrls: ['./add-exercise.component.css']
})
export class AddExerciseComponent implements OnInit {

  constructor(
    public ref: MatDialogRef<AddExerciseComponent>
  ) { }

  ngOnInit() {
  }

  close(){
    this.ref.close({
      name: 'Teste',
      repetitions: 10,
      series: 3,
      restSeconds: 30,
      type: 'teste'
    });
  }

}
