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
  pets = [
    { name: 'Cat' },
    { name: 'Dog' },
    { name: 'Fish' },
    { name: 'Bird' },
  ];
  cages = [
    { name: 'Yes' },
    { name: 'No' },
  ];
  times = [
    { name: '9:00 AM' },
    { name: '10:00 AM' },
    { name: '11:00 AM' },
    { name: '12:00 PM' },
    { name: '1:00 PM' },
    { name: '2:00 PM' },
    { name: '3:00 PM' },
    { name: '4:00 PM' },
    { name: '5:00 PM' },
  ]
}
