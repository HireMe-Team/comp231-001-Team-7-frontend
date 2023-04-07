import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private readonly baseUrl: string = 'http://localhost:3000/api/jobs';
  search(keywords: string, type: string): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/search?keywords=${keywords}&type=${type}`
    );
  }

  constructor(private http: HttpClient) {}
}