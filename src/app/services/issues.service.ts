import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IssuesService {
  private readonly baseUrl: string = 'http://localhost:3000/api/admin';
  getIssues(): Observable<any> {
    return this.http.get(`${this.baseUrl}/issues/all`);
  }
  getIssueById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/issue-details/${id}`);
  }

  constructor(private http: HttpClient) {}
}
