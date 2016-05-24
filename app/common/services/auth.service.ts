import { Injectable, ChangeDetectorRef } from '@angular/core';
import { Logger } from "./logger.service";
import { tokenNotExpired } from "angular2-jwt/angular2-jwt";

declare var Auth0Lock: any;

@Injectable()
export class AuthService {

  lock = new Auth0Lock('I4GFC738dar6pSXbAouMaXzYWqDovPwa', 'app51246984.auth0.com');

  constructor(private logger: Logger, private cd: ChangeDetectorRef) {
  }

  login() {
    this.lock.show((error: any, profile: Object, token: string) => {
      if(error) {
        this.logger.error(error.message);
      }
      localStorage.setItem('profile', JSON.stringify(profile));
      localStorage.setItem('id_token', token);
      this.cd.detectChanges();
    });
  }

  logout() {
    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');
    this.cd.detectChanges();
  }

  loggedIn():boolean {
    return tokenNotExpired();
  }
}
