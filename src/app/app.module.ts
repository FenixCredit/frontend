import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CookieModule } from 'ngx-cookie';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AuthGuardService } from '@shared/auth/auth-guard.service';
import { UnauthGuardService } from '@shared/auth/unauth-guard.service';
import { CustomHttpInterceptor } from '@shared/http/custom-http-interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CookieModule.forRoot()
  ],
  providers: [
    AuthGuardService,
    UnauthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
