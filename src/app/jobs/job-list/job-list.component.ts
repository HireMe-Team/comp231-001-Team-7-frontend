import { Component, OnInit } from '@angular/core';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css'],
})
export class JobListComponent implements OnInit {
  jobs = [];
  displayedJobs = [];
  pageSize = 6;
  currentPage = 0;

  constructor(private jobService: JobsService) {}

  ngOnInit(): void {
    this.jobService.getAllJobs().subscribe((jobs) => {
      this.jobs = jobs;
      this.showMore();
    });
  }

  showMore(): void {
    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;
    this.displayedJobs = [...this.displayedJobs, ...this.jobs.slice(start, end)];
    this.currentPage++;
  }
}
