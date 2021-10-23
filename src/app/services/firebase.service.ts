import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { UserProfile } from '../models/user-profile';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  users: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.users = db.list('/users');
  }

  getUserById(uid: string) {
    return this.db.object('users/' + uid).valueChanges();
  }

  saveUser(profile: UserProfile) {
    const userRef = this.db.object('users/' + profile.uid);
    userRef.set({ name: profile.name, 
                  email: profile.email,
                  isAdmin: false });
  }


}
