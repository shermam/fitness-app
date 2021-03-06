import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { User } from "@firebase/auth-types";
import { filter, mergeMap, map, switchMap } from "rxjs/operators";
import { from } from "rxjs";
import { Observable } from 'rxjs/Observable';
import { UserDoc } from "../types/userDoc";
import { FirestoreService } from './firestore.service';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	constructor(
		public afa: AngularFireAuth,
		public firestoreService: FirestoreService
	) {
		this.authenticate();
	}

	authenticate(): void {

		this.afa.authState.pipe(
			filter(user => !user),
			mergeMap(() => from<User>(this.afa.auth.signInAnonymously())),
			map(this.createUserDoc)
		).subscribe(userDoc => {
			const doc = this.firestoreService.afs.doc<UserDoc>(`users/${userDoc.uid}`);
			doc.valueChanges()
				.subscribe(dbUserDoc => {
					if (!dbUserDoc) {
						doc.set(userDoc);
					}
				});
		});
	}

	update(userDoc: UserDoc): void {
		const doc = this.firestoreService.afs.doc<UserDoc>(`users/${userDoc.uid}`);
		doc.update(userDoc);
	}

	createUserDoc(user: User): UserDoc {
		return {
			createdAt: new Date(user.metadata.creationTime),
			email: user.email,
			isAnonymous: user.isAnonymous,
			lastLoginAt: new Date(user.metadata.lastSignInTime),
			name: user.displayName,
			phoneNumber: user.phoneNumber,
			photoURL: user.photoURL,
			uid: user.uid,
			trainings: []
		}
	}

	getUser(): Observable<UserDoc> {
		return this.afa.authState.pipe(
			filter(user => !!user),
			mergeMap(user => {
				const doc = this.firestoreService.afs.doc<UserDoc>(`users/${user.uid}`);
				return doc.valueChanges();
			}),
			filter(user => !!user)
		);
	}
}
