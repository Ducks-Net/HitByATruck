import { Component, NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { Pet } from '../shared/pet';
import { PetService } from '../shared/pet.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-my-pets-body',
  templateUrl: './my-pets-body.component.html',
  styleUrls: ['./my-pets-body.component.css'],
})

export class MyPetsBodyComponent {
  pets: Array<Pet> = [];
  constructor(private petService: PetService, private userService: UserService, private router: Router) {
    let userId = this.userService.getLoggedUser()!.Id;
    petService.refreshUserPets(userId).then(
      () => {
        this.pets = petService.userPets;
        console.log(this.pets);
      });
  }


  public goToNewPet() {
    this.router.navigate(['/pet-info']);
  }
}
