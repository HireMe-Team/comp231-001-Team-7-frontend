// Importing necessary modules and services
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import IJob from 'src/app/models/job.model';
import IUser from 'src/app/models/user.model';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { JobsService } from 'src/app/services/jobs.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-job-application',
  templateUrl: './job-application.component.html',
  styleUrls: ['./job-application.component.css'],
})
export class JobApplicationComponent implements OnInit {
  // Initializing variables
  currentUser: IUser;
  applicant = {
    jobId: '',
    firstName: '',
    lastName: '',
    email: '',
    resume: null,
    userId: NaN,
  };
  job: IJob;
  id: string;
  message: string;
  resumeUrl: any;
  // Constructor that subscribes to route params and retrieves job data from the service
  constructor(
    private route: ActivatedRoute,
    private jobService: JobsService,
    private userService: UserService,
    private fileUploadService: FileUploadService,
    private router: Router
  ) {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.jobService.getJobById(this.id).subscribe((job) => {
      this.job = job;
    });
  }
  // On initialization, retrieves user data from the service and sets applicant data accordingly
  // Also retrieves user's resume file and its download URL
  ngOnInit(): void {
    this.currentUser = this.userService.getUserInfo();
    this.applicant.jobId = this.id;
    this.applicant.firstName = this.currentUser.firstName;
    this.applicant.lastName = this.currentUser.lastName;
    this.applicant.email = this.currentUser.email;
    this.applicant.userId = this.currentUser.userId;
    this.fileUploadService
      .getUserFiles(this.currentUser.userId)
      .subscribe((res) => {
        this.applicant.resume = res.items[res.items.length - 1];
        this.applicant.resume.getDownloadURL().then((downloadURL) => {
          this.resumeUrl = downloadURL;
        });
      });
  }
  // On form submission, sets applicant's resume to its download URL and submits the application
  onSubmit() {
    this.applicant.resume = this.resumeUrl;
    this.jobService.submitApplication(this.applicant).subscribe((res) => {
      if (res.sucess) {
        this.router.navigateByUrl('/');
      }
    });
  }
}
