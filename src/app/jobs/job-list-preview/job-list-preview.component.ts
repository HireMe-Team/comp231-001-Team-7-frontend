import { Component, OnInit } from '@angular/core';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-job-list-preview',
  templateUrl: './job-list-preview.component.html',
  styleUrls: ['./job-list-preview.component.css'],
})
export class JobListPreviewComponent implements OnInit {
  jobs = [];
  visibleJobs = 6;

  constructor(private jobService: JobsService) {}

  ngOnInit(): void {
    this.jobService.getAllJobs().subscribe((jobs) => {
      this.jobs = jobs;
    });
  }

  showMore() {
    this.visibleJobs += 6;
  }
}
