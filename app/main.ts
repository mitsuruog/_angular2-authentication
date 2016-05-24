import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { Logger } from './common/services/logger.service';
import { AuthService } from "./common/services/auth.service";

import { AppComponent } from './app.component';

bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS, AUTH_PROVIDERS, Logger, AuthService]);
