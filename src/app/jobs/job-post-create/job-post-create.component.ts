// Import necessary modules and services
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import IJob from 'src/app/models/job.model';
import IUser from 'src/app/models/user.model';
import { JobsService } from 'src/app/services/jobs.service';
import { UserService } from 'src/app/services/user.service';

// Define the component
@Component({
  selector: 'app-job-post-create',
  templateUrl: './job-post-create.component.html',
  styleUrls: ['./job-post-create.component.css'],
})
export class JobPostCreateComponent implements OnInit {
  // Define variables for the current user, job post, and success message
  currentUser: IUser;
  jobPost = {
    position: '',
    company: '',
    type: '',
    description: '',
    qualifications: '',
    salary: '',
    status: '',
    createDate: new Date(),
    closingDate: undefined,
    recruiterId: NaN,
  };
  message: string;

  // Inject necessary services
  constructor(
    private jobService: JobsService,
    userService: UserService,
    private route: Router
  ) {
    // Set the recruiter ID to the current user's ID
    this.currentUser = userService.getUserInfo();
    this.jobPost.recruiterId = this.currentUser.userId;
  }

  ngOnInit(): void {}

  // Define function to handle form submission
  onSubmit(form: NgForm) {
    this.jobService.createJobs(this.jobPost).subscribe((res) => {
      if (res) {
        // Reload the page if the job post was created successfully
        window.location.reload();
      }
    });
  }
}
