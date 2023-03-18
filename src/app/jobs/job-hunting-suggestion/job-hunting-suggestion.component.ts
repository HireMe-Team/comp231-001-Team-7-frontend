import { Component, OnInit } from '@angular/core';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-job-hunting-suggestion',
  templateUrl: './job-hunting-suggestion.component.html',
  styleUrls: ['./job-hunting-suggestion.component.css'],
})
export class JobHuntingSuggestionComponent implements OnInit {
  articles = []
  constructor(private jobServices: JobsService) {}
  ngOnInit(): void {
    this.jobServices.getJobSeekingSuggestions().subscribe((result) => {
      console.log(result);
      this.articles=result.slice(0,10)
    });
  }
}
