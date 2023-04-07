import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JobListComponent } from './jobs/job-list/job-list.component';
import { JobPostCreateComponent } from './jobs/job-post-create/job-post-create.component';
import { JobPostComponent } from './jobs/job-post/job-post.component';
import { CoverLetterComponent } from './user/cover-letter/cover-letter.component';
import { LoginComponent } from './user/login/login.component';
import { ProfileComponent } from './user/profile/profile.component';
import { RegisterComponent } from './user/register/register.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';

import { AddEducationComponent } from './user/add-education/add-education.component';
import { AddExperienceComponent } from './user/add-experience/add-experience.component';
import { JobApplicationComponent } from './jobs/job-application/job-application.component';
import { SecuritySettingsComponent } from './user/security-settings/security-settings.component';
import { RlProfileComponent } from './user/rl-profile/rl-profile.component';
import { CreateIssueComponent } from './user/create-issue/create-issue.component';
import { RecruiterDashboardComponent } from './user/recruiter-dashboard/recruiter-dashboard.component';
import { AuthGuardRecruiterService as AuthRecruiterGurad } from './services/auth-guard-recruiter.service';
import { SearchResultsComponent } from './search/search-results/search-results.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'jobs-posting', component: JobListComponent },
  {
    path: 'job-application/:id',
    component: JobApplicationComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'create-issue/:id',
    component: CreateIssueComponent,
    canActivate: [AuthGuard],
  },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  {
    path: 'profile/security-settings',
    component: SecuritySettingsComponent,
  },
  {
    path: 'profile/add-education',
    component: AddEducationComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'profile/add-experience',
    component: AddExperienceComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'jobs-create',
    component: JobPostCreateComponent,
    canActivate: [AuthRecruiterGurad],
  },
  {
    path: 'create-cover-letter',
    component: CoverLetterComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'post/:id',
    component: JobPostComponent,
  },
  {
    path: 'users/profile/:id',
    component: RlProfileComponent,
  },

  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'recruiter-dashboard',
    component: RecruiterDashboardComponent,
    canActivate: [AuthRecruiterGurad],
  },
  { path: 'search', component: SearchResultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
