// Import necessary modules and services
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobsService } from 'src/app/services/jobs.service';
import IJob from '../../models/job.model';
import { AuthGuardRecruiterService } from 'src/app/services/auth-guard-recruiter.service';

// Define the component
@Component({
  selector: 'app-job-post',
  templateUrl: './job-post.component.html',
  styleUrls: ['./job-post.component.css'],
})
export class JobPostComponent implements OnInit {
  // Define variables for displaying the Apply button and job information
  showApplyButton: boolean;
  id = '';
  job: IJob;

  // Inject necessary services
  constructor(private route: ActivatedRoute, private jobService: JobsService) {}

  // Initialize the component on page load
  ngOnInit(): void {
    // Get the ID of the job from the route parameters
    this.route.params.subscribe((params) => {
      this.id = params['id'];

      // Get the job information from the JobsService
      this.jobService.getJobById(this.id).subscribe((job) => {
        this.job = job;
      });
    });
  }

  // Define function to delete a job post
  deleteJobPost(id: string): void {
    this.jobService.deleteJobById(id);
  }
}
