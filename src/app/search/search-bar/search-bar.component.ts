import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  messagesObj: { message: string; class: string } = {
    message: '',
    class: '',
  };
  constructor(private router: Router) {}
  keywords: string = '';
  type: string;

  @Output() searchEvent = new EventEmitter();

  onSearch() {
    const queryParams = {
      keywords: this.keywords,
      type: this.type,
    };
    if (queryParams.keywords === '') {
      this.messagesObj.message = 'Please enter search words.';
      this.messagesObj.class = 'text-danger';
    } else {
      this.router.navigate(['/search'], { queryParams });
    }
  }
}
