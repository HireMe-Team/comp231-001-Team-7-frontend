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
  private readonly baseUrl = 'https://hireme-s3wc.onrender.com/api';
  currentUser: IUser;
  constructor(private http: HttpClient) {}

  register(user: IUser): Observable<any> {
    return this.http.post(`${this.baseUrl}/users/register`, user);
  }

  login(loginInfo): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/users/login`, loginInfo);
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
    // TODO: return this.http.post("https://hireme-s3wc.onrender.com/api/user/cover-letter", requestBody)
    return of(requestBody);
  }

  editCoverLetter(coverLetter: any): Observable<any> {
    const { position, company } = coverLetter;
    return this.http.put(
      `${this.baseUrl}/user/cover-letter?position=${position}&company=${company}`,
      coverLetter
    );
  }

  deleteCoverLetter(coverLetter: any): Observable<any> {
    const { position, company } = coverLetter;
    return this.http.delete(
      `${this.baseUrl}/user/cover-letter?position=${position}&company=${company}`
    );
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
    return this.http.post(
      `https://hireme-s3wc.onrender.com/api/users/upload-profile-pic`,
      {
        userId,
        url: downloadURL,
      }
    );
  }

  getUserIssues(userId: number): Observable<any> {
    return this.http.get(
      `https://hireme-s3wc.onrender.com/api/users/user/issues/${userId}`
    );
  }
}
