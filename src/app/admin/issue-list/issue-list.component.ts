// Import necessary modules and services
import { Component, OnInit } from '@angular/core';
import { IIssue } from 'src/app/models/issue.model';
import { IssuesService } from 'src/app/services/issues.service';

// Define the component
@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css'],
})
export class IssueListComponent implements OnInit {
  issues: IIssue[];

  // Inject necessary services
  constructor(private issueService: IssuesService) {}

  // Initialize the component on page load
  ngOnInit() {
    // Get the list of issues from the service
    this.issueService.getIssues().subscribe((issues) => (this.issues = issues));
  }
}
