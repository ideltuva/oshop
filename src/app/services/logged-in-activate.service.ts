import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInActivateService implements CanActivate {

  constructor(private router: Router, private auth: AuthService) { }

  canActivate(): boolean {
    if (this.auth.getLoggedIn()) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }


}
