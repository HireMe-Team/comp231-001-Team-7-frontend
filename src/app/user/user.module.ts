import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { SecuritySettingsComponent } from './security-settings/security-settings.component';
import { FormsModule } from '@angular/forms';
import { CoverLetterComponent } from './cover-letter/cover-letter.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    SecuritySettingsComponent,
    CoverLetterComponent,
  ],
  imports: [FormsModule, CommonModule],
})
export class UserModule {}
