import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}
  private readonly baseUrl: string = 'http://localhost:3000/api/admin';
  approveRecruiter(userId: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/approve-recruiter/${userId}`, {
      userId,
    });
  }
  getUnapprovedRecruiters(): Observable<any> {
    return this.http.get(`${this.baseUrl}/unapproved-recruiters`);
  }

  getTotalUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/total-users`);
  }
  //Admin Login
  adminLogin(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { email, password });
  }

  getRecruitersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/recruiters`);
  }
  addMessage(message: string, issueId: string): Observable<any> {
    return this.http.put(
      `${this.baseUrl}/issue-details/${issueId}/add-message`,
      { message }
    );
  }
}
