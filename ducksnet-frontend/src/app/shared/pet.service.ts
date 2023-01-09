import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pet, PetCreateDto } from './pet';
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
  userPets: any;

  constructor(private httpClient: HttpClient) { }

  public refreshUserPets(userId: string) {
    let opt = this.httpClient.get(this.apiURL + '/byOwner/' + userId, this.httpOptions);
    return opt.forEach(
      (data) => {
        this.userPets = data;
        for (let i = 0; i < this.userPets.length; i++) {
          this.userPets[i] = {
            Id: this.userPets[i].id,
            Name: this.userPets[i].name,
            Breed: this.userPets[i].breed,
            Species: this.userPets[i].species,
            DateOfBirth: this.userPets[i].dateOfBirth,
            Size: this.userPets[i].size.name,
          }
        }
      }
    );
  }

  public createPet(dto: PetCreateDto) {
    return this.httpClient.post(this.apiURL, dto, this.httpOptions);
  }
}
