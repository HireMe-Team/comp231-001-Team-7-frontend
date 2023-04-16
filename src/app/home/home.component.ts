// Import necessary modules and services
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

// Define the component
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // Define a placeholder function for search functionality
  onSearch($event: any) {
    throw new Error('Method not implemented.');
  }

  // Inject the AuthService into the component
  constructor(private authService: AuthService) {}

  // Initialize the component on page load
  ngOnInit(): void {}
}
