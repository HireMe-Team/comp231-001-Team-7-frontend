// Import necessary modules and services
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IIssue, IMessage } from 'src/app/models/issue.model';
import { AdminService } from 'src/app/services/admin.service';
import { IssuesService } from 'src/app/services/issues.service';

// Define the component
@Component({
  selector: 'app-issue-details',
  templateUrl: './issue-details.component.html',
  styleUrls: ['./issue-details.component.css'],
})
export class IssueDetailsComponent implements OnInit {
  // Define variables for adding admin messages
  form = {
    message: '',
  };

  // Define function to add admin message
  adminAddMessage() {
    this.adminService
      .addMessage(this.form.message, this.issueId)
      .subscribe((res) => {
        if (res.success) {
          window.location.reload();
        }
      });
  }

  // Define variables for issue details
  issueId: string;
  issue: IIssue;
  messages: IMessage;

  // Inject necessary services and get issue details on page load
  constructor(
    private route: ActivatedRoute,
    private issueService: IssuesService,
    private adminService: AdminService
  ) {}

  ngOnInit() {
    // Get the issue ID from the URL parameter
    this.issueId = this.route.snapshot.paramMap.get('id');

    // Get the details of the issue with the given ID
    this.issueService.getIssueById(this.issueId).subscribe((issue) => {
      this.issue = issue;
    });

    // Get the messages associated with the issue
    this.issueService
      .getMessage(this.issueId)
      .subscribe((m) => (this.messages = m));
  }
}
