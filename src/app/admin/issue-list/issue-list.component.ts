import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css'],
})
export class IssueListComponent implements OnInit {
  //TODO: issues: Issue[] = [];
  issues: any[] = [
    {
      _id: '61200d7a67a3dc3f109d78bd',
      userId: '2',
      subject: 'Error when uploading profile picture',
      description:
        'I tried to upload a new profile picture, but I keep getting an error message.',
      createdAt: '2021-08-20T08:30:18.123Z',
      updatedAt: '2021-08-20T08:30:18.123Z',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
  // ngOnInit() {
  //   this.issueService.getIssues().subscribe(
  //     (data: any) => {
  //       this.issues = data.issues;
  //     },
  //     (error: any) => {
  //       console.error(error);
  //     }
  //   );
  // }
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
