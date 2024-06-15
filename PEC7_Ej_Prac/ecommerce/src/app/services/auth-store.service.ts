import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthStoreService {
  private readonly TOKEN_KEY = 'auth_token';

  login(): void {
    localStorage.setItem(this.TOKEN_KEY, 'fake-auth-token');
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  isAuthenticated(): boolean {
    return localStorage.getItem(this.TOKEN_KEY) !== null;
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }
}
