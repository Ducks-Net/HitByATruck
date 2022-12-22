import { Component } from '@angular/core';

@Component({
  selector: 'app-app-sign-in-body',
  templateUrl: './app-sign-in-body.component.html',
  styleUrls: ['./app-sign-in-body.component.css']
})
export class AppSignInBodyComponent {
  email:string = '';
  password:string = '';
  onUpdateEmail(newEmail: Event)
  {
    this.email = (<HTMLInputElement>newEmail.target).value;

  }
  onUpdatePassword(newPassword: Event)
  {
    this.password = (<HTMLInputElement>newPassword.target).value;
  }
  onSubmit()
  {
    console.log(this.email);
    console.log(this.password);
  }
}
