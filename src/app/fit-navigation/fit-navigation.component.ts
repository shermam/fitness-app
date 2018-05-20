import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { User } from '@firebase/auth-types';
import { UserDoc } from "../types/userDoc";
import { AngularFirestore, AngularFirestoreDocument } from "angularfire2/firestore";

import { firestore } from "firebase";

@Component({
	selector: 'app-fit-navigation',
	templateUrl: './fit-navigation.component.html',
	styleUrls: ['./fit-navigation.component.css']
})
export class FitNavigationComponent implements OnInit {

	user: User = null;
	userDoc: UserDoc = null;
	userDocument: AngularFirestoreDocument<UserDoc>;

	constructor(
		private afs: AngularFirestore,
		public auth: AngularFireAuth,
	) {
		firestore().settings({
			timestampsInSnapshots: true
		});
	}

	ngOnInit() {
		this.authenticate();
	}

	authenticate(): void {
		this.auth.authState.subscribe((user: User) => {
			if (!user) {
				return this.auth.auth.signInAnonymously();
			}

			this.user = user;
			this.userDoc = {
				name: this.user.displayName,
				uid: this.user.uid
			}

			this.userDocument = this.afs.doc<UserDoc>(`users/${user.uid}`);
			this.userDocument.set(this.userDoc);

		});
	}



}
