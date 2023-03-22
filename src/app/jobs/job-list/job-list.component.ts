import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css'],
})
export class JobListComponent implements OnInit {
  jobs = [
    {
      title: 'Software Engineer',
      description: 'A software engineer with 3+ years of experience...',
      location: 'New York, NY',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Product Manager',
      description: 'A product manager with a strong background in...',
      location: 'San Francisco, CA',
      image: 'https://via.placeholder.com/150',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
