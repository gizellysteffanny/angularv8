import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

import { Observable } from 'rxjs';
import { AuthService } from 'src/app/modules/access-control/auth.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private service: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.service.getTokenStorage()) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.service.getToken()}`
        }
      });
    }
    return next.handle(req);
  }
}
