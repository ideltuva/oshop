import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';


@Injectable()
export class AdminGuard implements CanActivate {

  constructor(private auth: AuthService) { }

  canActivate(): Observable<boolean> {
    return this.auth.user$
      .pipe(map((user: any) => user.isAdmin));
  }
}
