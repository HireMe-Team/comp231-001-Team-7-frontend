import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import IUser from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  currentUser: IUser;
  updatePassword(
    currentPassword: string,
    newPassword: string,
    userId: Number
  ): Observable<any> {
    return this.http.post('https://hireme-s3wc.onrender.com/api/users/change-password', {
      userId,
      currentPassword,
      newPassword,
    });
  }
  constructor(private http: HttpClient, private userService: UserService) {
    if (this.isAuthenticated()) {
      this.isLoggedIn = true;
    }
  }
  public isAuthenticated(): Boolean {
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    }
    return false;
  }
  public isRecruiter(): Boolean {
    this.currentUser = this.userService.getUserInfo();
    return this.currentUser.role === 'recruiter' ? true : false;
  }
}
