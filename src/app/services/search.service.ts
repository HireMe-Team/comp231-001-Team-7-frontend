// Import necessary modules and services
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Define the service
@Injectable({
  providedIn: 'root',
})
export class SearchService {
  // Define the base URL for the API
  private readonly baseUrl: string =
    'https://hireme-s3wc.onrender.com/api/jobs';

  // Define function for searching jobs by keywords and type
  search(keywords: string, type: string): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/search?keywords=${keywords}&type=${type}`
    );
  }

  // Inject necessary services
  constructor(private http: HttpClient) {}
}
