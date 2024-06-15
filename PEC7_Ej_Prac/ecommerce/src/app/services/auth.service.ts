import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authUrl = 'http://localhost:3000/api/user';

  constructor(private http: HttpClient) {}
  login(username: string, password: string): Observable<any> {
    const url = `${this.authUrl}/login`;
    return this.http.post(url, { username, password });
  }
  register(username: string): Observable<any> {
    const url = `${this.authUrl}/register`;
    const password = 'SECRET';
    return this.http.post(url, { username, password });
  }
}
