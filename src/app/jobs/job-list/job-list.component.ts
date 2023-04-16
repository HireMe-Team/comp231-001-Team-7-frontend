// Import necessary modules and services
import { Component, OnInit } from '@angular/core';
import { JobsService } from 'src/app/services/jobs.service';

// Define the component
@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css'],
})
export class JobListComponent implements OnInit {
  // Define variables for the job list and pagination
  jobs = [];
  displayedJobs = [];
  pageSize = 6;
  currentPage = 0;

  // Inject the job service
  constructor(private jobService: JobsService) {}

  // Initialize the component on page load
  ngOnInit(): void {
    // Get all jobs from the job service
    this.jobService.getAllJobs().subscribe((jobs) => {
      this.jobs = jobs;
      // Show the first page of jobs
      this.showMore();
    });
  }

  // Define function to show more jobs
  showMore(): void {
    // Calculate the range of jobs to display
    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;

    // Add the next page of jobs to the displayed jobs list
    this.displayedJobs = [
      ...this.displayedJobs,
      ...this.jobs.slice(start, end),
    ];

    // Increment the current page
    this.currentPage++;
  }
}
