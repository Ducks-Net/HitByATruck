import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StringsService } from './strings.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  apiURL = StringsService.getBaseUrl() + 'api/v1/appointments';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private httpClient: HttpClient) { }

  public getUpcomingAppointments(petId: string) {
    let appointments: any;
    let opt = this.httpClient.get(this.apiURL + '/byPet/' + petId, this.httpOptions);
    return opt;
  }
}
