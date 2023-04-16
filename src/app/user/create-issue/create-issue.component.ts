import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import IUser from 'src/app/models/user.model';
import { IssuesService } from 'src/app/services/issues.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-issue',
  templateUrl: './create-issue.component.html',
  styleUrls: ['./create-issue.component.css'],
})
export class CreateIssueComponent implements OnInit {
  issueForm: FormGroup;
  currentUser: IUser;
  constructor(
    private formBuilder: FormBuilder,
    private issueService: IssuesService,
    private userService: UserService,
    private router: Router
  ) {
    this.currentUser = this.userService.getUserInfo();
  }

  ngOnInit(): void {
    this.issueForm = this.formBuilder.group({
      title: ['', Validators.required],
      userId: this.currentUser.userId,
      issueDetail: ['', Validators.required],
      status: ['open'],
      reportDate: [new Date().toISOString()],
    });
  }

  onSubmit() {
    this.issueService.createIssue(this.issueForm.value).subscribe(() => {
      // Redirect to the issues list page
      this.router.navigate(['/']);
    });
  }
}
