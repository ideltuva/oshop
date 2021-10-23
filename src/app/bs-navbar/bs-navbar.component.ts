import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UserProfile } from '../models/user-profile';
import { AuthService } from '../services/auth.service';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  user: any;
  user$;
  userSubscription;
  userProfile: UserProfile;

  constructor(private auth: AuthService, private db: FirebaseService, private router: Router) {
    this.auth.loggedIn$()
      .subscribe( (loggedIn) => {
        if (loggedIn) {
          this.user = JSON.parse(localStorage.getItem('user'));
          this.user$ = db.getUserById(this.user.uid);
          this.userSubscription = this.user$.subscribe(user => {
            if (user) {
              this.userProfile = { uid: this.user.uid, ...user };
            } else {
              db.saveUser(this.userProfile);
            }
          });
        }
        else this.userProfile = null;
      });
  }

  onLogOut() {
    this.auth.logOut();
    this.userSubscription.unsubscribe();
  }

  goToLogin() {
    this.router.navigate(['login']);
  }

}
