import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import IUser from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user: IUser = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 'job_seeker',
    phoneNumber: '',
    profileImage: '',
    bio: '',
    location: '',
    company: '',
  };
  name: string;
  email: string;
  password: string;
  role: string;
  message: string;
  showCompanyInput: any;

  constructor(private userService: UserService, private route: Router) {}
  onRoleChange() {
    if (this.user.role === 'recruiter') {
      this.showCompanyInput = true;
    } else {
      this.showCompanyInput = false;
    }
  }
  ngOnInit(): void {}

  onSubmit(userForm: NgForm): void {
    const user = userForm.value;

    const userObject = {
      email: user.email,
      password: user.password,
      role: user.role,
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber: user.phoneNumber,
      profileImage: user.profileImage,
      bio: user.bio,
      location: user.location,
      company: user.company,
    } as IUser;
    if (userForm.valid) {
      this.userService.register(userObject).subscribe((response) => {
        this.message = response.message;
        if (response.message === 'User created successfully') {
          this.route.navigate(['/']);
        }
      });
    }
  }
}
