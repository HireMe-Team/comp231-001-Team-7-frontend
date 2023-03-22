import { Component, OnInit } from '@angular/core';
import IJob from 'src/app/models/job.model';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-job-post-create',
  templateUrl: './job-post-create.component.html',
  styleUrls: ['./job-post-create.component.css'],
})
export class JobPostCreateComponent implements OnInit {
  job: IJob;
  constructor(private jobService: JobsService) {}

  ngOnInit(): void {}
  onSubmit() {
    console.log(this.job);
    // Code to save the job post to the server goes here
  }
}
