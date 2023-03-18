import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { JobsModule } from './jobs/jobs.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [AppComponent, NavBarComponent, FooterComponent, HomeComponent],
  imports: [FormsModule, BrowserModule, AppRoutingModule, JobsModule, UserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
