import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  totalUsers = 0;
  email: string;
  password: string;
  constructor() {}

  ngOnInit() {}

  // ngOnInit() {
  //   this.userService.getTotalUsers().subscribe(
  //     (data: any) => {
  //       this.totalUsers = data.totalUsers;
  //     },
  //     (error: any) => {
  //       console.error(error);
  //     }
  //   );
  // }

  onSubmit(form) {
    const newAdmin = {
      email: this.email,
      password: this.password,
    };
    console.log('New admin account submitted');
    console.log(newAdmin);
    // TODO: Call API to create new admin account

    // Clear form fields after submission
    form.reset();
  }
}
