import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { IssueListComponent } from './issue-list/issue-list.component';



@NgModule({
  declarations: [
    AdminLoginComponent,
    AdminDashboardComponent,
    IssueListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: AdminLoginComponent },
      { path: 'dashboard', component: AdminDashboardComponent },
    ]),
  ],
  exports: [RouterModule]
})
export class AdminModule { }
