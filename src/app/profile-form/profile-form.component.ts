import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent {
  firstName!: string;
  lastName!: string;
  email!: string;
  degree!: string;
  university!: string;
  company!: string;
  position!: string;
  skill1!: string;
  skill2!: string;

  onSubmit() {
    console.log('Form submitted');
  }
}

