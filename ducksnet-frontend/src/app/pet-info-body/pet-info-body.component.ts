import { Component } from '@angular/core';

@Component({
  selector: 'app-pet-info-body',
  templateUrl: './pet-info-body.component.html',
  styleUrls: ['./pet-info-body.component.css']
})
export class PetInfoBodyComponent {
  selected = 'option2';
  name: string = '';
  species: string = '';
  breed: string = '';
  dateOfBirth: string = '';

  onUpdateName(newName: Event) {
    this.name = (<HTMLInputElement>newName.target).value;
  }

  onUpdateSpecies(newSpecies: Event) {
    this.species = (<HTMLInputElement>newSpecies.target).value;
  }

  onUpdateBreed(newBreed: Event) {
    this.breed = (<HTMLInputElement>newBreed.target).value;
  }

  pets = [
    { name: 'small' },
    { name: 'medium' },
    { name: 'big' },
  ];
}
