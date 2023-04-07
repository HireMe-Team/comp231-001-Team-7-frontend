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
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { SearchBarComponent } from './search/search-bar/search-bar.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';

@NgModule({
  declarations: [AppComponent, NavBarComponent, FooterComponent, HomeComponent, SearchBarComponent, SearchResultsComponent],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    JobsModule,
    UserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
