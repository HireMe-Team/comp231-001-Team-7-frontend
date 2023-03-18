import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log('Admin login form submitted');
    console.log(form.value);
    // TODO: Call API to authenticate admin credentials

    this.router.navigate(['/admin/dashboard']);
  }

  
}
