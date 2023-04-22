import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationInterceptorProvider } from './interceptors/authentication-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    routingRoutes,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
