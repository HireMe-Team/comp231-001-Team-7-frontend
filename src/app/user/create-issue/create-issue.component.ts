import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IssuesService } from 'src/app/services/issues.service';

@Component({
  selector: 'app-create-issue',
  templateUrl: './create-issue.component.html',
  styleUrls: ['./create-issue.component.css'],
})
export class CreateIssueComponent implements OnInit {
  issueForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private issueService: IssuesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.issueForm = this.formBuilder.group({
      title: ['', Validators.required],
      userId: ['', Validators.required],
      issueDetail: ['', Validators.required],
      status: ['open'],
      reportDate: [new Date().toISOString()],
    });
  }

  onSubmit() {
    this.issueService.createIssue(this.issueForm.value).subscribe(() => {
      // Redirect to the issues list page
      this.router.navigate(['/issues']);
    });
  }
}
