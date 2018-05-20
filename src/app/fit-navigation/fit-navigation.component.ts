import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user.service";
import { UserDoc } from "../types/userDoc";



@Component({
	selector: 'app-fit-navigation',
	templateUrl: './fit-navigation.component.html',
	styleUrls: ['./fit-navigation.component.css']
})
export class FitNavigationComponent implements OnInit {

	userDoc: UserDoc;

	constructor(
		public userService: UserService
	) { }

	ngOnInit() {
		this.userService.getUser()
			.subscribe(userDoc => this.userDoc = userDoc);
	}

	get isLoggedIn(): boolean {
		return (!!this.userDoc) && !this.userDoc.isAnonymous;
	}

}
