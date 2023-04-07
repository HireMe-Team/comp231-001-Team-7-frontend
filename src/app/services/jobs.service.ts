import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import IJob from '../models/job.model';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  deleteJobPost(_id: string) {
    throw new Error('Method not implemented.');
  }
  private readonly baseUrl = 'http://localhost:3000/api/jobs';
  constructor(private http: HttpClient) {}
  //---------------------- JOB HUNTING TIPS ----------------------//
  getJobSeekingSuggestions(): Observable<any> {
    return this.http.get(
      `http://localhost:3000/api/admin/job-hunting-tips/all`
    );
  }
  createJobSeekingSuggestions(tip: {
    title: string;
    body: string;
  }): Observable<any> {
    return this.http.post(
      `http://localhost:3000/api/admin/job-hunting-tips/create`,
      tip
    );
  }
  //---------------------- JOB POSTING ----------------------//
  getAllJobs(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all-jobs`);
  }
  getJobsByRecruiterId(recruiterId: Number): Observable<any> {
    return this.http.get(`${this.baseUrl}/recruiter-jobs/${recruiterId}`);
  }
  // getJobById(id): Observable<IJobInterface> {
  getJobById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/job-details/${id}`);
  }

  createJobs(jobs: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/create-job-postings`, jobs);
  }

  updateJobById(id: string, post: IJob): Observable<any> {
    return this.http.put(`${this.baseUrl}/job-details/update/${id}`, post);
  }

  deleteJobById(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/job-details/update/${id}`);
  }
  submitApplication(application): Observable<any> {
    return this.http.post(`${this.baseUrl}/submit-application`, application);
  }
}
