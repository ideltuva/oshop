import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfile } from '../models/user-profile';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  user: UserProfile;

  constructor(private auth: AuthService, private router: Router) {
    this.auth.userProfile$.subscribe(user => this.user = user);
  }

  onLogOut() {
    this.auth.logout();
  }
}
