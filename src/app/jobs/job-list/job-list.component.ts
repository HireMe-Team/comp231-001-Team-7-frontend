import { Component, OnInit } from '@angular/core';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css'],
})
export class JobListComponent implements OnInit {
  jobs = [];

  constructor(private jobService: JobsService) {}

  ngOnInit(): void {
    this.jobService.getAllJobs().subscribe((jobs) => {
      this.jobs = jobs;
    });
  }
}
