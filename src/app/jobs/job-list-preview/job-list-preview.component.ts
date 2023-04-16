// Import necessary modules and services
import { Component, OnInit } from '@angular/core';
import { JobsService } from 'src/app/services/jobs.service';

// Define the component
@Component({
  selector: 'app-job-list-preview',
  templateUrl: './job-list-preview.component.html',
  styleUrls: ['./job-list-preview.component.css'],
})
export class JobListPreviewComponent implements OnInit {
  // Define variables for storing jobs and the number of visible jobs
  jobs = [];
  visibleJobs = 6;

  // Inject necessary services
  constructor(private jobService: JobsService) {}

  // Initialize the component on page load
  ngOnInit(): void {
    // Get all the jobs from the job service
    this.jobService.getAllJobs().subscribe((jobs) => {
      this.jobs = jobs;
    });
  }

  // Define function to show more jobs when "Show More" button is clicked
  showMore() {
    this.visibleJobs += 6;
  }
}
