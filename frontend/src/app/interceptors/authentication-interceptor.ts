import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationInterceptorInterceptor implements HttpInterceptor {

  constructor() {
    
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    const token = sessionStorage.getItem("token") || '{}';
    request = request.clone({
      headers: request.headers.set('Autorization', `Bearer ${token}`),
    });
    
    return next.handle(request);
  }
}

export const AuthenticationInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthenticationInterceptorInterceptor,
  multi: true,
};
