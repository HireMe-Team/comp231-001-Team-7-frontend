import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
    location: ''

  }
  name: string;
  email: string;
  password: string;
  role: string;
  message: string;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  onSubmit(userForm: NgForm): void {
    const user = userForm.value;
   
    const userObject= {
      email: user.email,
      password: user.password,
      role: user.role,
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber: user.phoneNumber,
      profileImage: user.profileImage,
      bio: user.bio,
      location: user.location
    } as IUser 
    if (userForm.valid) {
      
      this.userService.register(userObject).subscribe(response => {
        this.message = response.message;
        console.log(response);
      });
    }
    
  }
}
