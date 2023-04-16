import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import IJob from 'src/app/models/job.model';
import IUser from 'src/app/models/user.model';
import { JobsService } from 'src/app/services/jobs.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-job-post-create',
  templateUrl: './job-post-create.component.html',
  styleUrls: ['./job-post-create.component.css'],
})
export class JobPostCreateComponent implements OnInit {
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
  constructor(
    private jobService: JobsService,
    userService: UserService,
    private route: Router
  ) {
    this.currentUser = userService.getUserInfo();
    this.jobPost.recruiterId = this.currentUser.userId;
  }

  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    console.log(this.jobPost);
    this.jobService.createJobs(this.jobPost).subscribe((res) => {
      if (res) {
        window.location.reload()
      }
    });
  }
}
