import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobsService } from 'src/app/services/jobs.service';
import IJob from '../../models/job.model';
import { AuthGuardRecruiterService } from 'src/app/services/auth-guard-recruiter.service';
@Component({
  selector: 'app-job-post',
  templateUrl: './job-post.component.html',
  styleUrls: ['./job-post.component.css'],
})
export class JobPostComponent implements OnInit {
  showApplyButton: boolean;
  id = '';
  job: IJob;
  constructor(
    private route: ActivatedRoute,
    private jobService: JobsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.jobService.getJobById(this.id).subscribe((job) => {
        this.job = job;
      });
    });
  }

  deleteJobPost(id: string): void {
    this.jobService.deleteJobById(id);
  }
}
