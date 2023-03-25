import { Component, OnInit } from '@angular/core';
import IIssue from 'src/app/models/issue.model';
import { IssuesService } from 'src/app/services/issues.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css'],
})
export class IssueListComponent implements OnInit {
  issues: IIssue[];

  constructor(private issueService: IssuesService) {}

  ngOnInit() {
    this.issueService.getIssues().subscribe((issues) => (this.issues = issues));
  }
  deleteIssue(issueId: string) {
    //   if (confirm('Are you sure you want to delete this issue?')) {
    //     this.issueService.deleteIssue(issueId).subscribe(
    //       (data: any) => {
    //         console.log(`Issue with ID ${issueId} deleted`);
    //         this.issues = this.issues.filter(issue => issue._id !== issueId);
    //       },
    //       (error: any) => {
    //         console.error(error);
    //       }
    //     );
    //   }
  }
}
