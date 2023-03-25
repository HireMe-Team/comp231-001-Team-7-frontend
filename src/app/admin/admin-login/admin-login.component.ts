import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private router: Router, private adminService: AdminService) {}

  ngOnInit() {}

  onSubmit(form) {
    console.log('Admin login form submitted');
    const email = form.value.email;
    const password = form.value.password;
    console.log({ email, password });
    this.adminService
      .adminLogin(email, password)
      .subscribe((res) => console.log(res.data));

    this.router.navigate(['/admin/dashboard']);
  }
}
