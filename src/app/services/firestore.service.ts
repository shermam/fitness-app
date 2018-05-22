import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { firestore } from 'firebase';

@Injectable({
	providedIn: 'root'
})
export class FirestoreService {

	afs: AngularFirestore;

	constructor(
		afs: AngularFirestore,
	) {
		this.initializeFirestore();
		this.afs = afs;
	}

	initializeFirestore(): void {
		firestore().settings({
			timestampsInSnapshots: true
		});
	};
}
