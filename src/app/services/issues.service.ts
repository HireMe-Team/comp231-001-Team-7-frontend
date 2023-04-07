import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IssuesService {
  private readonly baseUrl: string = 'https://hireme-s3wc.onrender.com/api/admin';
  createIssue(issue) {
    return this.http.post(
      'https://hireme-s3wc.onrender.com/api/users/issue/create',
      issue
    );
  }
  getIssues(): Observable<any> {
    return this.http.get(`${this.baseUrl}/issues/all`);
  }
  getIssueById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/issue-details/${id}`);
  }

  getMessage(issueID: string): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/issue-details/${issueID}/get-message`
    );
  }

  constructor(private http: HttpClient) {}
}
