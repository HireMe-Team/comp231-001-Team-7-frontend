import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { JobListComponent } from './jobs/job-list/job-list.component';
import { ProfileComponent } from './user/profile/profile.component';
import { SecuritySettingsComponent } from './user/security-settings/security-settings.component';
import { JobPostComponent } from './jobs/job-post/job-post.component';
import { JobHuntingSuggestionComponent } from './jobs/job-hunting-suggestion/job-hunting-suggestion.component';
import { JobsModule } from './jobs/jobs.module';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    JobListComponent,
    ProfileComponent,
    SecuritySettingsComponent,
    JobPostComponent,
    JobHuntingSuggestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
