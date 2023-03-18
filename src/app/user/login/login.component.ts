import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}
  loginInfo = {
    username: '',
    password: '',
  };

  ngOnInit(): void {}

  login(): void {
    // Perform your authentication logic here
    console.log('Email:', this.loginInfo.username);
    console.log('Password:', this.loginInfo.password);
  }
}
