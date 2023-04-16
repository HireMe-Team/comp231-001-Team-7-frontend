// Import necessary modules and services
import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

// Define the component
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  // Define variables for displaying success/error messages to the user
  messagesObj: { message: string; class: string } = {
    message: '',
    class: '',
  };

  // Inject necessary services
  constructor(private router: Router) {}

  // Define variables for keywords and search type
  keywords: string = '';
  type: string = '';

  // Define output event for search
  @Output() searchEvent = new EventEmitter();

  // Define function to handle search button click
  onSearch() {
    // Create query parameters object with keywords and search type
    const queryParams = {
      keywords: this.keywords,
      type: this.type,
    };

    // If no keywords are entered, display an error message to the user
    if (queryParams.keywords === '') {
      this.messagesObj.message = 'Please enter search words.';
      this.messagesObj.class = 'text-danger';
    }
    // Otherwise, navigate to the search results page with the query parameters
    else {
      this.router.navigate(['/search'], { queryParams });
    }
  }
}
