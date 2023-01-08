import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginDto } from '../shared/user';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-app-sign-in-body',
  templateUrl: './app-sign-in-body.component.html',
  styleUrls: ['./app-sign-in-body.component.css']
})
export class AppSignInBodyComponent {
  email:string = '';
  password:string = '';

  constructor(private userService: UserService, private router: Router) { }

  onUpdateEmail(newEmail: Event)
  {
    this.email = (<HTMLInputElement>newEmail.target).value;

  }
  onUpdatePassword(newPassword: Event)
  {
    this.password = (<HTMLInputElement>newPassword.target).value;
  }
  async onSubmit()
  {
    var dto: UserLoginDto = {
      Email: this.email,
      Password: this.password
    }

    if( await this.userService.loginUser(dto) ) {
      this.router.navigate(['/homepage']);
    }

  }
}
