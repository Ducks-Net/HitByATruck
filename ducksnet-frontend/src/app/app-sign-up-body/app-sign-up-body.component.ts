import { Component } from '@angular/core';

@Component({
  selector: 'app-app-sign-up-body',
  templateUrl: './app-sign-up-body.component.html',
  styleUrls: ['./app-sign-up-body.component.css']
})
export class AppSignUpBodyComponent {
  email:string = '';
  password:string = '';
  confirmPassword:string = '';
  firstName:string = '';
  lastName:string = '';
  address:string = '';
  phoneNumber:string = '';

  onUpdateEmail(newEmail: Event)
  {
    this.email = (<HTMLInputElement>newEmail.target).value;

  }
  onUpdatePassword(newPassword: Event)
  {
    this.password = (<HTMLInputElement>newPassword.target).value;
  }
  onUpdateConfirmPassword(newConfirmPassword: Event)
  {
    this.confirmPassword = (<HTMLInputElement>newConfirmPassword.target).value;
  }
  onUpdateFirstName(newFirstName: Event)
  {
    this.firstName = (<HTMLInputElement>newFirstName.target).value;
  }
  onUpdateLastName(newLastName: Event)
  {
    this.lastName = (<HTMLInputElement>newLastName.target).value;
  }
  onUpdateAddress(newAddress: Event)
  {
    this.address = (<HTMLInputElement>newAddress.target).value;
  }
  onUpdatePhoneNumber(newPhoneNumber: Event)
  {
    this.phoneNumber = (<HTMLInputElement>newPhoneNumber.target).value;
  }
  onSubmit()
  {
    console.log(this.email);
    console.log(this.password);
    console.log(this.confirmPassword);
    console.log(this.firstName);
    console.log(this.lastName);
    console.log(this.address);
  }
}
