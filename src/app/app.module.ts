import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecuritySettingsComponent } from './security-settings/security-settings.component';
import { LoginComponent } from './login/login.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { DocumentListComponent } from './document-list/document-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SecuritySettingsComponent,
    LoginComponent,
    ProfileFormComponent,
    UserListComponent,
    IssueListComponent,
    DocumentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
