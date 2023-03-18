import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-hunting-suggestion',
  templateUrl: './job-hunting-suggestion.component.html',
  styleUrls: ['./job-hunting-suggestion.component.css'],
})
export class JobHuntingSuggestionComponent implements OnInit {
  // this part will fetch api to get that data,
  // through HTTP Client (Please create a services)
  articles = [
    {
      title: '5 Tips for Acing Your Next Job Interview',
      description:
        'Learn how to impress potential employers and secure your dream job...',
      date: '2023-02-20',
    },
    {
      title: 'How to Optimize Your LinkedIn Profile for Job Hunting',
      description:
        'Discover the secrets to making your LinkedIn profile stand out to recruiters...',
      date: '2023-01-15',
    },
  ];

  constructor() {}
  ngOnInit(): void {}

}
