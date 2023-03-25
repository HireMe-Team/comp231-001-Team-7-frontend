import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private route: ActivatedRoute, private jobService: JobsService  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const job = this.jobService.getJobById(params['id']);
      this.applicant.jobType = job.type;
      this.applicant.position = job.position;
      this.applicant.company = job.company;
    })
  }
  onSubmit(applicationForm:NgForm){
    console.log(applicationForm)
  }
}
