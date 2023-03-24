import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {

  loggedIn: Boolean = false;
  showingUsername: String | undefined;
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loggedIn = this.authService.isAuthenticated();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.loggedIn = this.authService.isLoggedIn;
        this.showingUsername = this.userService.getUserInfo()?.firstName;
      }
    });
  }
  logout() {
    this.userService.logout().subscribe((res) => {
          if (res.success) {
            this.userService.clearUserInfo();
            this.authService.isLoggedIn = false;
            window.location.reload();
          }
        });
      }
}
