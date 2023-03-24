import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}
  loginInfo = {
    email: '',
    password: '',
  };
  caution: string = '';
  ngOnInit(): void {}

  login(): void {
    console.log('Email:', this.loginInfo.email);
    console.log('Password:', this.loginInfo.password);
    this.userService.login(this.loginInfo).subscribe((loginResult) => {
      if (loginResult.success) {
        this.userService.setUserInfo(loginResult.token);
        this.router.navigateByUrl('/');
      }
    });
  }
}
