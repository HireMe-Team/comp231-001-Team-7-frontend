import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import IUser from '../models/user.model';
import jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  public setUserInfo(token: string) {
    localStorage.setItem('token', token);
  }
  private readonly baseUrl = 'http://localhost:3000/api';
  private currentUser: IUser;
  constructor(private http: HttpClient) {}

  register(user: IUser): Observable<any> {
    return this.http.post(`${this.baseUrl}/users/register`, user);
  }

  login(loginInfo): Observable<{
    success: boolean;
    token: string;
    userId: string;
  }> {
    return this.http
      .post<{
        success: boolean;
        token: string;
        userId: string;
      }>(`${this.baseUrl}/users/login`, loginInfo)
      .pipe(
        map((response) => {
          const token = response.token;
          const userId = response.userId;
          console.log({ token });
          console.log({ userId });
          localStorage.setItem('token', token);
          localStorage.setItem('userId', userId);
          return response;
        })
      );
  }

  logout(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/logout`);
  }

  createCoverLetter(requestBody: {
    position: string;
    company: string;
    message: string;
  }): Observable<any> {
    // TODO: to issue post request /api/user/cover-letter
    // TODO: return this.http.post("http://localhost:3000/api/user/cover-letter", requestBody)
    return of(requestBody);
  }

  getToken() {
    return localStorage.getItem('token');
  }
  public getUserInfo() {
    const token = this.getToken();
    if (token != null) {
      let decode: any = jwt_decode(token);
      const user: IUser = decode.user;
      return user;
    }
    return undefined;
  }
  public clearUserInfo() {
    localStorage.clear();
  }
}
