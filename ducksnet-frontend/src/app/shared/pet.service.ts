import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StringsService } from './strings.service';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  apiURL = StringsService.getBaseUrl() + 'api/v1/pets';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  public getUserPets(userId: string) {
    let pets: any = undefined;
    let opt = this.httpClient.get(this.apiURL + '/byOwner/' + userId, this.httpOptions);
    opt.forEach(
      (data) => {
        pets = data;
      }
    );
    return pets;
  }
}
