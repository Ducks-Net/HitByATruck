import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserCreateDto } from '../shared/user';
import { UserService } from '../shared/user.service';

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

  constructor(private userService: UserService, private router: Router) { }

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
    var dto: UserCreateDto = {
      FirstName: this.firstName,
      LastName: this.lastName,
      Address: this.address,
      PhoneNumber: this.phoneNumber,
      Email: this.email,
      Password: this.password,
    };

    this.userService.registerUser(dto).subscribe(
      (data: any) => {
        if(data.isSuccess) {
          this.router.navigate(['/sign-in']);
        }
      }
    );


  }
}
