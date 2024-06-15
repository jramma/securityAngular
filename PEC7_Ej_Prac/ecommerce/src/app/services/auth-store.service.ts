import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root',
})
export class AuthStoreService {
  private readonly TOKEN_KEY = 'auth_token';

  constructor(private authService: AuthService) {}

  login(): void {
    this.authService.setToken('fake-auth-token');
  }

  logout(): void {
    this.authService.setToken('noToken');
  }

  isAuthenticated(): boolean {
    return (
      this.authService.getToken() !== null ||
      this.authService.getToken() !== 'noToken'
    );
  }

  getToken(): string | null {
    return this.authService.getToken();
  }
}
