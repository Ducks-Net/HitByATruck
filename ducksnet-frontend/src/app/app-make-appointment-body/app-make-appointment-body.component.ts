import { Component } from '@angular/core';

@Component({
  selector: 'app-app-make-appointment-body',
  templateUrl: './app-make-appointment-body.component.html',
  styleUrls: ['./app-make-appointment-body.component.css']
})
export class AppMakeAppointmentBodyComponent {
  selected = 'option2';
  location:string = '';

  onUpdateLocation(newLocation: Event)
  {
    this.location = (<HTMLInputElement>newLocation.target).value;
  }
}
