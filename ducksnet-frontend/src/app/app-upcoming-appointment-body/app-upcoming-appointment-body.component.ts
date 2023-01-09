import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from '../shared/appointment.service';
import { PetService } from '../shared/pet.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-app-upcoming-appointment-body',
  templateUrl: './app-upcoming-appointment-body.component.html',
  styleUrls: ['./app-upcoming-appointment-body.component.css']
})
export class AppUpcomingAppointmentBodyComponent {
  appointments: Array<any> = [];
  constructor(private petService: PetService, private userService: UserService, private appointmentService: AppointmentService, private router: Router) {
    let userId = this.userService.getLoggedUser()!.Id;
    this.petService.refreshUserPets(userId).then(
      () => {
        let petIds = this.petService.userPets.map((pet: { Id: any; }) => pet.Id);
        for (let petId of petIds) {
           this.appointmentService.getUpcomingAppointments(petId).forEach(
            (data) => {
              let cappointments: any = data;
              for (let i = 0; i < cappointments.length; i++) {
                this.appointments.push({
                  Id: cappointments[i].id,
                  LocationId: cappointments[i].locationId,
                  PetId: cappointments[i].petId,
                  VetId: cappointments[i].vetId,
                  StartTime: cappointments[i].startTime,
                  EndTime: cappointments[i].endTime,
                  Type: cappointments[i].type,
                  NeedsCage: cappointments[i].needsCage,
                })
              }
            });
            this.appointments = this.appointments.sort((a: { StartTime: any; }, b: { StartTime: any; }) => a.StartTime - b.StartTime);
        }
        console.log("Appoitnments", this.appointments);
      });
  }
}
