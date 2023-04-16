import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import IEducation from 'src/app/models/education.model';
import IUser from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css'],
})
export class AddEducationComponent implements OnInit {
  currentUser: IUser;
  categories = ['High School', 'Associate', 'Bachelor', 'Master', 'PhD'];
  education: IEducation = {
    degree: '',
    institution: '',
    startDate: new Date(),
    endDate: new Date(),
    description: '',
    category: '',
  };
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.currentUser = this.userService.getUserInfo();
  }
  onSubmit() {
    this.userService
      .addEducation(this.education, this.currentUser.userId)
      .subscribe((res) => {
      });
  }
}
