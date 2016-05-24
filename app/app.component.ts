import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { AuthHttp } from "angular2-jwt/angular2-jwt";
import { ToolbarComponent } from "./toolbar.component";
import { WellcomeComponent } from "./wellcome.component";
import { AuthService } from "./common/services/auth.service";
import { Logger } from './common/services/logger.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.html',
  styleUrls: ['app/app.css'],
  providers: [Logger, AuthService],
  directives: [ToolbarComponent, WellcomeComponent, ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: "/me", name: "Wellcome", component: WellcomeComponent}
])
export class AppComponent {

  constructor(
    private logger: Logger,
    private http: Http,
    private authHttp: AuthHttp,
    private auth: AuthService) {
  }

  ngOnInit() {
    this.logger.log('Alo!! Alo!!');
  }

  securedPing() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.authHttp.get('/secured/ping', { headers })
      .map((res) => res.json())
      .subscribe(
        (data) => this.logger.log(data),
        (err) => this.logger.error(err)
      );
  }

  ping() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.get('/ping', { headers })
      .map((res) => res.json())
      .subscribe(
        (data) => this.logger.log(data),
        (err) => this.logger.error(err)
      );
  }


}
