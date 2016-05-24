import { Component } from '@angular/core';
import { CanActivate } from '@angular/router-deprecated';
import { JwtHelper, tokenNotExpired } from "angular2-jwt/angular2-jwt";
import { AuthService } from "./common/services/auth.service";

@Component({
  selector: 'wellcome',
  template: `
    <div *ngIf="auth.loggedIn()">
      <h3>profile</h3>
      <div>email:{{getUserInfo().email}}</div>
      <img src="{{getUserInfo().picture}}" alt="">
      <h3>JWT info</h3>
      <div>iss:{{getTokenInfo().iss}}</div>
      <div>exp:{{getTokenInfo().exp | date:'y/MM/dd j:mm:ss'}}</div>
    </div> 
  `,
  styles: [`
    img {
      border-radius: 50%;
      height: 5rem;
      width: 5rem;
    }
  `],
  providers: [AuthService]
})
@CanActivate(() => tokenNotExpired())
export class WellcomeComponent {
  jwtHelper: JwtHelper;

  constructor(private auth:AuthService) {
    this.jwtHelper = new JwtHelper();
  }

  getUserInfo() {
    return JSON.parse(localStorage.getItem('profile'));
  }

  getTokenInfo() {
    var decoded = this.jwtHelper.decodeToken(localStorage.getItem('id_token'));
    return {
      exp: new Date(decoded.exp * 1000),
      iss: decoded.iss
    }
  }
}
