import { Component, OnInit } from '@angular/core';
import IUser from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-security-settings',
  templateUrl: './security-settings.component.html',
  styleUrls: ['./security-settings.component.css'],
})
export class SecuritySettingsComponent implements OnInit {
  currentUser: IUser = this.userService.getUserInfo();
  currentPassword: any;
  newPassword: any;
  confirmPassword: any;
  errorMessage: String = '';
  successMessage: string = '';
  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit(): void {}
  updatePassword() {
    if (this.newPassword !== this.confirmPassword) {
      // Show an error message if the new passwords don't match
      this.errorMessage = 'Passwords do not match';
      return;
    }

    // Call the API to update the password
    this.authService.updatePassword(
      this.currentPassword,
      this.newPassword,
      this.currentUser.userId
    );
  }
}
