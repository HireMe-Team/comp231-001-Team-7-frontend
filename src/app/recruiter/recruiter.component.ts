import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  featuredJobs = [
    { title: 'Frontend Developer', description: 'We are looking for a frontend developer with experience in Angular', location: 'New York' },
    { title: 'Backend Developer', description: 'We are looking for a backend developer with experience in Node.js', location: 'San Francisco' },
    { title: 'Full Stack Developer', description: 'We are looking for a full stack developer with experience in React and Django', location: 'Seattle' }
  ];
}

