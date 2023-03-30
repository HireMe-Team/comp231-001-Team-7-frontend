import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobsService } from 'src/app/services/jobs.service';
import IJob from '../../models/job.model';
@Component({
  selector: 'app-job-post',
  templateUrl: './job-post.component.html',
  styleUrls: ['./job-post.component.css'],
})
export class JobPostComponent implements OnInit {
createIssue(jobId: string) {
throw new Error('Method not implemented.');
}
  id = '';
  job: IJob;
  constructor(private route: ActivatedRoute, private jobService: JobsService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.jobService.getJobById(this.id).subscribe((job) => {
        console.log(job);
        this.job = job;
      });
    });
  }
}
