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
  cautionObj: { message: string; class: string } = {
    message: '',
    class: '',
  };
  ngOnInit(): void {}

  login(): void {
    this.userService.login(this.loginInfo).subscribe((loginResult) => {
      console.log(loginResult);
      if (loginResult.success) {
        this.userService.setUserInfo(loginResult.token);
        this.router.navigateByUrl('/');
      } else {
        this.cautionObj.message = loginResult.message;
        this.cautionObj.class = 'text-danger';
      }
    });
  }
}
