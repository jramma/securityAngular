import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authUrl = 'http://localhost:3000/api/user';
  private token: string | null = null;

  constructor(private http: HttpClient) {
    // Asegúrate de que el código solo se ejecuta en el navegador
    if (typeof window !== 'undefined') {
      this.token = localStorage.getItem('token');
    }
  }

  login(username: string, password: string): Observable<any> {
    const url = `${this.authUrl}/login`;
    return this.http.post(url, { username, password });
  }

  register(username: string): Observable<any> {
    const url = `${this.authUrl}/register`;
    const password = 'SECRET';
    return this.http.post(url, { username, password });
  }

  setToken(token: string): void {
    this.token = token;
    if (typeof window !== 'undefined') {
      localStorage.setItem('token', token);
    }
  }

  getToken(): string | null {
    return this.token;
  }

  getIsAuthenticated(): boolean {
    return this.token !== null && this.token !== 'noToken';
  }

  logout(): void {
    this.token = null;
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
    }
  }
}
