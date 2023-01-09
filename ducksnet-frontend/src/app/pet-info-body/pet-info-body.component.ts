import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PetCreateDto } from '../shared/pet';
import { PetService } from '../shared/pet.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-pet-info-body',
  templateUrl: './pet-info-body.component.html',
  styleUrls: ['./pet-info-body.component.css']
})
export class PetInfoBodyComponent {
  selected = '';
  name: string = '';
  species: string = '';
  breed: string = '';
  dateOfBirth: string = '';

  constructor(private userService: UserService, private petService: PetService, private rotuer: Router) { }

  onUpdateName(newName: Event) {
    this.name = (<HTMLInputElement>newName.target).value;
  }

  onUpdateSpecies(newSpecies: Event) {
    this.species = (<HTMLInputElement>newSpecies.target).value;
  }

  onUpdateBreed(newBreed: Event) {
    this.breed = (<HTMLInputElement>newBreed.target).value;
  }

  onUpdateDateOfBirth(newDateOfBirth: Event) {
    this.dateOfBirth = (<HTMLInputElement>newDateOfBirth.target).value;
  }

  public createPet() {
    let dto: PetCreateDto = {
      Name: this.name,
      Species: this.species,
      Breed: this.breed,
      DateOfBirth: this.dateOfBirth,
      OwnerId: this.userService.getLoggedUser()!.Id,
      Size: this.selected
    }
    console.log(dto);

    this.petService.createPet(dto).forEach(
      () => {
        this.rotuer.navigate(['/my-pets']);
      }
    );
  }

  pets = [
    'Small',
    'Medium',
    'Large'
  ];
}
