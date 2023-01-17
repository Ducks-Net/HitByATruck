import { ThisReceiver } from '@angular/compiler';
import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../shared/user';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.css']
})
export class AppbarComponent {
    loggedUser: User | undefined = undefined;

    constructor(private userService: UserService, private router: Router) {
      this.loggedUser = this.userService.loggedUser;
      userService.onLogAction = () =>
        {
          console.log("log action before", this.loggedUser);
          this.loggedUser = this.userService.loggedUser;
          console.log("log action after", this.loggedUser);
        };
     }

    public isLoggedIn(): boolean {
        return this.loggedUser !== undefined;
    }

    public logout(): void {
        this.loggedUser = undefined;
        this.userService.logout();
        this.router.navigate(['/']);
    }

    public goToSignIn(): void {
        this.router.navigate(['/sign-in']);
    }

    public goToSignUp(): void {
        this.router.navigate(['/sign-up']);
    }

    public goToClinics(): void {
        this.router.navigate(['/clinics']);
    }

    public goToApiShow(): void {
        this.router.navigate(['/api-show']);
    }

    public goToHomepage(): void {
        this.router.navigate(['/homepage']);
    }
}
