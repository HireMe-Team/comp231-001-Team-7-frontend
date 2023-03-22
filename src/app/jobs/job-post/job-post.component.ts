import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobsService } from 'src/app/services/jobs.service';
import IJob from '../../models/job.model'
@Component({
  selector: 'app-job-post',
  templateUrl: './job-post.component.html',
  styleUrls: ['./job-post.component.css'],
})
export class JobPostComponent implements OnInit {
  id = '';
  job : IJob;
  constructor(private route: ActivatedRoute, private jobService: JobsService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.job = this.jobService.getJobById(this.id)
    });
  }
}
