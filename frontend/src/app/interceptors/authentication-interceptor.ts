import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthenticationInterceptorInterceptor implements HttpInterceptor {

  constructor() {
    
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const token = sessionStorage.getItem("token") || '{}';
    const isLoginUrl = request.url.endsWith(environment.url + "/user/login");
    const isRegisterUrl = request.url.endsWith(environment.url + "/user/register");
    if (!isLoginUrl && !isRegisterUrl){
    request = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${token}`), 
    });
    
  }
  
  return next.handle(request);
  }
}

export const AuthenticationInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthenticationInterceptorInterceptor,
  multi: true,
};
