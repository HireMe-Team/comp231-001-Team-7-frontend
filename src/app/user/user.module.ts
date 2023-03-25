import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { SecuritySettingsComponent } from './security-settings/security-settings.component';
import { FormsModule } from '@angular/forms';
import { CoverLetterComponent } from './cover-letter/cover-letter.component';
import { AddEducationComponent } from './add-education/add-education.component';
import { AddExperienceComponent } from './add-experience/add-experience.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    SecuritySettingsComponent,
    CoverLetterComponent,
    AddEducationComponent,
    AddExperienceComponent,
  ],
  imports: [FormsModule, CommonModule],
})
export class UserModule {}
