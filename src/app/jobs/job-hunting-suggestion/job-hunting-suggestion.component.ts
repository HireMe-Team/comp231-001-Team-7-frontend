// Import necessary modules and services
import { Component, OnInit } from '@angular/core';
import { JobsService } from 'src/app/services/jobs.service';

// Define the component
@Component({
  selector: 'app-job-hunting-suggestion',
  templateUrl: './job-hunting-suggestion.component.html',
  styleUrls: ['./job-hunting-suggestion.component.css'],
})
export class JobHuntingSuggestionComponent implements OnInit {
  // Define an array to store the articles
  articles = [];

  // Inject necessary services
  constructor(private jobServices: JobsService) {}

  // Initialize the component on page load
  ngOnInit(): void {
    // Get job seeking suggestions from the server
    this.jobServices.getJobSeekingSuggestions().subscribe((result) => {
      // Display only the first 10 suggestions
      this.articles = result.slice(0, 10);
    });
  }
}
