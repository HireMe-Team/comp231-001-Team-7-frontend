// Import necessary modules and services
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

// Define the component
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {
  // Define variables for the email, password, and error/success message
  email: string;
  password: string;
  messageObj: { message: string; class: string } = { message: '', class: '' };

  // Inject necessary services
  constructor(private router: Router, private adminService: AdminService) {}

  // Initialize the component on page load
  ngOnInit() {}

  // Define function to submit the login form
  onSubmit(form) {
    // Get the email and password from the form
    const email = form.value.email;
    const password = form.value.password;

    // Call the adminLogin() function from the admin service to check the credentials
    this.adminService.adminLogin(email, password).subscribe((res) => {
      if (res.success) {
        // If the credentials are correct, display success message and navigate to admin dashboard
        this.messageObj.message = 'success';
        this.messageObj.class = 'text-success';
        this.router.navigate(['/admin/dashboard']);
      } else {
        // If the credentials are incorrect, display error message
        this.messageObj.message = res.message;
        this.messageObj.class = 'text-danger';
      }
    });
  }
}
