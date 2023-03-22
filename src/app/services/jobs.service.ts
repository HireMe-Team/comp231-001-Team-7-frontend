import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import IJob from '../models/job.model';

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

  // getJobById(id): Observable<IJobInterface> {
  getJobById(id: string): IJob {
    const job: IJob = {
      id: "asd123",
      position: 'Web Developer',
      company: 'Acme Inc.',
      type: 'Full-time',
      description:
        'We are looking for a skilled web developer to join our team...',
      qualifications:
        "Bachelor's degree in Computer Science or equivalent experience...",
      salary: '$80,000 - $100,000',
      status: 'Open',
      createDate: new Date('2023-03-22'),
      closingDate: new Date('2023-04-22'),
    };

    return job;
  }
}
