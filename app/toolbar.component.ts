import 'rxjs/add/operator/map';
import { Component } from '@angular/core';
import { AuthService } from "./common/services/auth.service";

@Component({
  selector: 'toolbar',
  template: `
    <div *ngIf="!auth.loggedIn()">valid account info is here. <code>test@example.com / test</code></div>
    <button (click)="auth.login()" class="btn btn-default" *ngIf="!auth.loggedIn()">Login</button>  
    <button (click)="auth.logout()" class="btn" *ngIf="auth.loggedIn()">Logout</button>  
  `,
  providers: [AuthService]
})
export class ToolbarComponent {
  constructor(private auth:AuthService) {
  }
}
