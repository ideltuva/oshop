import { Component } from '@angular/core';
import { UserProfile } from '../models/user-profile';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  userProfile: UserProfile;

  constructor(public auth: AuthService) { 
    this.auth.user$.subscribe(user => {
      if (user) {
        this.userProfile = {
          fullname: user.name, 
          email: user.email,
          isAdmin: user.isAdmin                               
        }
      } else {
        this.userProfile = null;
      }
    });
  }

  onLogOut() {
    this.auth.logout();
  }
}
