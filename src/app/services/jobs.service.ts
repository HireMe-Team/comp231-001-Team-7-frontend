import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  constructor(private http: HttpClient) {}
  //Example of getting a list of jobs-seeking suggestion
  getJobSeekingSuggestions(): Observable<
    [{ id: number; title: string; body: string; userId: number }]
  > {
    return this.http.get<
      [{ id: number; title: string; body: string; userId: number }]
    >('https://jsonplaceholder.typicode.com/posts');
  }
}
