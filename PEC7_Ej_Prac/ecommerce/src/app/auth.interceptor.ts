import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthStoreService } from './services/auth-store.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authStore: AuthStoreService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.authStore.getToken();

    if (authToken) {
      const authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${authToken}`)
      });

      return next.handle(authReq);
    }

    return next.handle(req);
  }
}export interface Auth {
}
