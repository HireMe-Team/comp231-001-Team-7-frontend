import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IExperience } from 'src/app/models/experience.model';
import IUser from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
})
export class AddExperienceComponent {
  user: IUser = this.userService.getUserInfo();
  experience: IExperience = {
    title: '',
    company: '',
    startDate: new Date(),
    endDate: null,
    description: '',
    location: '',
  };
  constructor(private userService: UserService) {}
  onSubmit(form: NgForm) {
    if (form.valid) {
      this.userService
        .addExperience(this.experience, this.user.userId)
        .subscribe(
          (response) => {
            console.log(response);
            form.resetForm();
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }
}
