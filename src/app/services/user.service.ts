import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import IUser from '../models/user.model';
import jwt_decode from 'jwt-decode';
import IEducation from '../models/education.model';
import { IExperience } from '../models/experience.model';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  public setUserInfo(token: string) {
    localStorage.setItem('token', token);
  }
  private readonly baseUrl = 'http://localhost:3000/api';
  currentUser: IUser;
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

  addEducation(education: IEducation, userId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/users/add-education`, {
      userId,
      education,
    });
  }
  addExperience(experience: IExperience, userId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/users/add-experience`, {
      userId,
      experience,
    });
  }

  getToken() {
    return localStorage.getItem('token');
  }
  public getUserInfo() {
    const token = this.getToken();
    if (token != null) {
      let decode: any = jwt_decode(token);
      const user: IUser = decode.user;
      const userId: number = user.userId;
      return user;
    }
    return undefined;
  }
  public clearUserInfo() {
    localStorage.clear();
  }
  getUser(userId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/users/user/${userId}`);
  }
  uploadProfilePic(userId: number, downloadURL: string) {
    return this.http
      .post(`http://localhost:3000/api/users/upload-profile-pic`, {
        userId,
        url: downloadURL,
      })
      .subscribe((res) => console.log(res));
  }
}
