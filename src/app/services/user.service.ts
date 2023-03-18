import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  register(user): Observable<any> {
    // TODO: return this.http.post(register api endpoint, user)
    return null;
  }
  login(user): Observable<any> {
    // TODO: return this.http.post(login api endpoint, user)
    return null;
  }
  logout(): Observable<any> {
    // TODO: return this.http.get(logout api endpoint)
    return null;
  }
  //TODO: update profile fetching
  //updateProfile(updateForm?): Observable<any> {
  // return this.http.post(updateProfile api endpoint, updateForm,
  //{headers: {authentication: 'Basic ' + localStorage.getItem('token'}}
  //)
  //};
}
