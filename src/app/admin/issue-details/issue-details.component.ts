import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import IIssue from 'src/app/models/issue.model';
import { IssuesService } from 'src/app/services/issues.service';

@Component({
  selector: 'app-issue-details',
  templateUrl: './issue-details.component.html',
  styleUrls: ['./issue-details.component.css'],
})
export class IssueDetailsComponent implements OnInit {
  issueId: string;
  issue: IIssue;
  constructor(
    private route: ActivatedRoute,
    private issueService: IssuesService
  ) {}

  ngOnInit() {
    this.issueId = this.route.snapshot.paramMap.get('id');
    this.issueService.getIssueById(this.issueId).subscribe((issue) => {
      console.log(issue);
      this.issue = issue;
    });
  }
}
