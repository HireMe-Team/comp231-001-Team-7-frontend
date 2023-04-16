// Import necessary modules and services
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

// Define the component
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  // Define variables for user role and login status
  userRole;
  loggedIn: Boolean = false;

  // Define variable for displaying the username
  showingUsername: String | undefined;

  // Inject necessary services
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {}

  // Initialize the component on page load
  ngOnInit(): void {
    // Subscribe to router events to detect changes in the URL
    this.router.events.subscribe((event) => {
      // If the event is a NavigationEnd event, update the component state
      if (event instanceof NavigationEnd) {
        // Check if the user is logged in
        this.loggedIn = this.authService.isLoggedIn;

        // Display the user's first name in the navbar
        this.showingUsername = this.userService.getUserInfo()?.firstName;

        // Check the user's role and display the appropriate navbar items
        const role = this.userService.getUserInfo()?.role;
        if (role === 'admin' || role === 'recruiter' || role === 'job_seeker') {
          this.userRole = role;
        } else {
          this.userRole = false;
        }
      }
    });
  }

  // Define function to log out the user
  logout() {
    // Call the logout function from the user service
    this.userService.logout().subscribe((res) => {
      if (res.success) {
        // Clear the user info from local storage and set the login status to false
        this.userService.clearUserInfo();
        this.authService.isLoggedIn = false;

        // Reload the page to update the navbar
        window.location.reload();
      }
    });
  }
}
