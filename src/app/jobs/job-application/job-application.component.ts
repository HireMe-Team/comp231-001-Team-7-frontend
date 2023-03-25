import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import IJob from 'src/app/models/job.model';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-job-application',
  templateUrl: './job-application.component.html',
  styleUrls: ['./job-application.component.css']
})
export class JobApplicationComponent implements OnInit {
applicant = {
  firstName: "",
  lastName: "",
  resume: "",
  coverLetter: "",
  position: "",
  company: "",
  jobType: ""
}
job : IJob;
  constructor(private route: ActivatedRoute, private jobService: JobsService  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.jobService.getJobById(params['id']);
      this.applicant.jobType = this.job.type;
      this.applicant.position = this.job.position;
      this.applicant.company = this.job.company;
    })
  }
  onSubmit(applicationForm:NgForm){
    console.log(applicationForm)
  }
}
