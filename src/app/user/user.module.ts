import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { SecuritySettingsComponent } from './security-settings/security-settings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoverLetterComponent } from './cover-letter/cover-letter.component';
import { AddEducationComponent } from './add-education/add-education.component';
import { AddExperienceComponent } from './add-experience/add-experience.component';
import { RlProfileComponent } from './rl-profile/rl-profile.component';
import { CreateIssueComponent } from './create-issue/create-issue.component';
import { RecruiterDashboardComponent } from './recruiter-dashboard/recruiter-dashboard.component';
import { JobsModule } from '../jobs/jobs.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    SecuritySettingsComponent,
    CoverLetterComponent,
    AddEducationComponent,
    AddExperienceComponent,
    RlProfileComponent,
    CreateIssueComponent,
    RecruiterDashboardComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    JobsModule,
    RouterModule,
  ],
})
export class UserModule {}
