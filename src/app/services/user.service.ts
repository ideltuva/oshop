import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { UserProfile } from '../models/user-profile';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  save(user: firebase.User) {
    if (user && user.uid) {
      this.db.object('/users/' + user.uid).update({
        name: user.displayName,
        email: user.email
      });
    }
  }

  get(uid: string): AngularFireObject<UserProfile> {
    return this.db.object('/users/' + uid);
  }
}
