// Import necessary modules and services
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

// Define the component
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // Inject necessary services
  constructor(private userService: UserService, private router: Router) {}

  // Define variables for user login information and error messages
  loginInfo = {
    email: '',
    password: '',
  };
  cautionObj: { message: string; class: string } = {
    message: '',
    class: '',
  };

  // Initialize the component on page load
  ngOnInit(): void {}

  // Define function to handle user login
  login(): void {
    this.userService.login(this.loginInfo).subscribe((loginResult) => {
      // If login is successful, set user information and navigate to home page
      if (loginResult.success) {
        this.userService.setUserInfo(loginResult.token);
        this.router.navigateByUrl('/');
      } else {
        // If login fails, display error message to the user
        this.cautionObj.message = loginResult.message;
        this.cautionObj.class = 'text-danger';
      }
    });
  }
}
