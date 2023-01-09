import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../shared/user';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-app-homepage-body',
  templateUrl: './app-homepage-body.component.html',
  styleUrls: ['./app-homepage-body.component.css']
})
export class AppHomepageBodyComponent {
  user: User | undefined;
  constructor(private userService: UserService, private router: Router) {
      this.user = this.userService.getLoggedUser();
      console.log(this.user);
   }

  public goToMyPets() {
    this.router.navigate(['/my-pets']);
  }

  public goToUpcomingAppointments() {
    this.router.navigate(['/upcoming-appointment']);
  }

}
