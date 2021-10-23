import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

import firebase from 'firebase/app';
import { Observable, Subject } from 'rxjs';
import { FirebaseService } from './firebase.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn: boolean;

  private logStatusSubject = new Subject<boolean>();

  loggedIn$(): Observable<boolean> {
    return this.logStatusSubject.asObservable();
  }

  constructor(public afAuth: AngularFireAuth, private route: ActivatedRoute, public db: FirebaseService, public router: Router) { }

  async loginWithGoogle() {
    await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then( () => {
        this.afAuth.authState
          .subscribe( user => {
            if (user) {
              localStorage.setItem('user', JSON.stringify(user) )
              this.setLoggedIn(true);
              this.logStatusSubject.next(this.getLoggedIn());
              //navigate to Home if no query params
              let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
              this.router.navigate([returnUrl || '/']);
            }
          });
      });
  }

  async logOut() {
    await this.afAuth.signOut()
      .then( () => {
        localStorage.removeItem('user');
        this.setLoggedIn(false);
        this.logStatusSubject.next(this.getLoggedIn());
        //navigate to Login when logged out
        this.router.navigate(['/login']);
      });
  }

  public setLoggedIn(loggedIn: boolean) {
    this.loggedIn = loggedIn;
  };
  public getLoggedIn(): boolean {
    return this.loggedIn;
  };

}
