import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { User } from '@firebase/auth-types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  user: User = null;

  constructor(public auth: AngularFireAuth){}

  ngOnInit(){
    this.auth.authState.subscribe((user: User) => {
      if (!user) {
        this.auth.auth.signInAnonymously();
      }
      this.user = user;
    });
  }
}
