import { Training } from "./training";

export class UserDoc {
    createdAt: Date;
    email: string;
    isAnonymous: boolean;
    lastLoginAt: Date;
    name: string;
    phoneNumber: string;
    photoURL: string;
    uid: string;
    trainings: Training[];
}