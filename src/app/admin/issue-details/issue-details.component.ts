import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IIssue, IMessage } from 'src/app/models/issue.model';
import { AdminService } from 'src/app/services/admin.service';
import { IssuesService } from 'src/app/services/issues.service';

@Component({
  selector: 'app-issue-details',
  templateUrl: './issue-details.component.html',
  styleUrls: ['./issue-details.component.css'],
})
export class IssueDetailsComponent implements OnInit {
  form = {
    message: '',
  };
  adminAddMessage() {
    this.adminService.addMessage(this.form.message,this.issueId).subscribe((res)=> {
      if (res.success) {
        window.location.reload();
      }
    })
  }
  issueId: string;
  issue: IIssue;
  messages: IMessage;
  constructor(
    private route: ActivatedRoute,
    private issueService: IssuesService,
    private adminService: AdminService
  ) {}

  ngOnInit() {
    this.issueId = this.route.snapshot.paramMap.get('id');
    this.issueService.getIssueById(this.issueId).subscribe((issue) => {
      console.log(issue);
      this.issue = issue;
    });
    this.issueService
      .getMessage(this.issueId)
      .subscribe((m) => (this.messages = m));
  }
}
