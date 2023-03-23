import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import IUser from '../models/user.model';
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

createCoverLetter(requestBody:{position: string, company: string, message: string}): Observable <any> {
    // TODO: to issue post request /api/user/cover-letter 
    // TODO: return this.http.post("http://localhost:3000/api/user/cover-letter", requestBody)
    return of(requestBody);
}

  //TODO: update profile fetching
  //updateProfile(updateForm?): Observable<any> {
  // return this.http.post(updateProfile api endpoint, updateForm,
  //{headers: {authentication: 'Basic ' + localStorage.getItem('token'}}
  //)
  //};
  getUser(id: number): IUser {
    const user: IUser = {
      userId: 1,
      email: 'jane.doe@example.com',
      password: 'password123',
      role: 'job_seeker',
      firstName: 'Jane',
      lastName: 'Doe',
      phoneNumber: '555-1234',
      profileImage: 'https://example.com/profile.jpg',
      bio: 'I am a software developer with experience in Angular and Node.js.',
      location: 'New York, NY',
      createdAt: new Date('2022-03-20T12:00:00Z'),
      updatedAt: new Date('2022-03-22T10:30:00Z'),
      skills: ['Angular', 'Node.js', 'JavaScript', 'HTML', 'CSS'],
      experience: [
        {
          title: 'Software Developer',
          company: 'Acme Corp',
          startDate: new Date('2020-01-01T00:00:00Z'),
          endDate: new Date('2022-03-19T23:59:59Z'),
          description:
            'Worked on the development of a web-based project management tool using Angular and Node.js.',
          location: 'New York, NY',
        },
        {
          title: 'Web Developer',
          company: 'XYZ Inc',
          startDate: new Date('2018-06-01T00:00:00Z'),
          endDate: new Date('2019-12-31T23:59:59Z'),
          description:
            'Developed and maintained several company websites using WordPress, HTML, and CSS.',
          location: 'San Francisco, CA',
        },
      ],
      education: [
        {
          degree: 'Bachelor of Science',
          institution: 'University of California, Berkeley',
          startDate: new Date('2014-08-01T00:00:00Z'),
          endDate: new Date('2018-05-31T23:59:59Z'),
          description: 'Studied Computer Science and Mathematics.',
          category: 'Bachelor',
        },
      ],
    };
    return user;
  }
}
