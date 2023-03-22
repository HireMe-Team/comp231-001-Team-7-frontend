import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JobListComponent } from './jobs/job-list/job-list.component';
import { JobPostCreateComponent } from './jobs/job-post-create/job-post-create.component';
import { JobPostComponent } from './jobs/job-post/job-post.component';
import { CoverLetterComponent } from './user/cover-letter/cover-letter.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'jobs-posting', component: JobListComponent },
  { path: 'jobs-create', component: JobPostCreateComponent },
  { path: 'create-cover-letter', component: CoverLetterComponent },
  {
    path: 'post/:id',
    component: JobPostComponent,
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
