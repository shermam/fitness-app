import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { User } from '@firebase/auth-types';

@Component({
  selector: 'app-fit-navigation',
  templateUrl: './fit-navigation.component.html',
  styleUrls: ['./fit-navigation.component.css']
})
export class FitNavigationComponent implements OnInit {

  user: User = null;

  constructor(
    public auth: AngularFireAuth,
  ) { }

  ngOnInit() {
    this.authenticate();
  }

  authenticate(): void {
    this.auth.authState.subscribe((user: User) => {
      if (!user) {
        this.auth.auth.signInAnonymously();
      }
      this.user = user;
    });
  }

}
