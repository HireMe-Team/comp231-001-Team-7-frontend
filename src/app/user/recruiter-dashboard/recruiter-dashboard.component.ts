import { Component, OnInit } from '@angular/core';
import IJob from 'src/app/models/job.model';
import IUser from 'src/app/models/user.model';
import { JobsService } from 'src/app/services/jobs.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-recruiter-dashboard',
  templateUrl: './recruiter-dashboard.component.html',
  styleUrls: ['./recruiter-dashboard.component.css'],
})
export class RecruiterDashboardComponent implements OnInit {
  showingForm: boolean = false;
  showForm() {
    this.showingForm = !this.showingForm;
  }
  currentUser: IUser;
  onDelete(jobPost: IJob) {
    this.jobService.deleteJobById(jobPost._id).subscribe(() => {
      this.jobPosts = this.jobPosts.filter((j) => j._id !== jobPost._id);
    });
  }
  jobPosts: IJob[];

  constructor(
    private jobService: JobsService,
    private userServie: UserService
  ) {
    this.currentUser = this.userServie.getUserInfo();
    this.jobService
      .getJobsByRecruiterId(this.currentUser.userId)
      .subscribe((jobs) => {
        this.jobPosts = jobs;
      });
  }

  ngOnInit(): void {}
}
