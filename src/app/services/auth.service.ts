import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  updatePassword(
    currentPassword: string,
    newPassword: string,
    userId: Number
  ): Observable<any> {
    return this.http.post('http://localhost:3000/api/users/change-password', {
      userId,
      currentPassword,
      newPassword,
    });
  }
  constructor(private http: HttpClient) {
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
}
