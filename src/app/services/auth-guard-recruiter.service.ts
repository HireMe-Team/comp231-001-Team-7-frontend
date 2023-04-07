import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardRecruiterService {
  constructor(private authService: AuthService, private route: Router) {}

  canActivate() {
    if (this.authService.isRecruiter()) {
      return true;
    }
    this.route.navigate(['login']);
    return false;
  }
}
