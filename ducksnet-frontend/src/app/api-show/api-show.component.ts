import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api-show',
  templateUrl: './api-show.component.html',
  styleUrls: ['./api-show.component.css'],
})
export class ApiShowComponent {
  userUpdateModel: any = {
    id: '',
    dto: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      address: '',
    },
  };
  lastOperationResult: any;
  submitCreatePet() {
    this.client.post(this.petsUrl, this.petCreateModel.dto).subscribe(
      (data) => {
        this.lastOperationResult = {
          isSuccess: true,
        };
        this.refreshPets();
        this.petCreateModel = {
          dto: {
            name: '',
            size: '',
            type: '',
            breed: '',
            species: '',
            ownerId: '',
            dateOfBirth: '',
          },
        };
      },
      (error) => {
        this.lastOperationResult = {
          isSuccess: false,
          message: error.error.message,
        };
      }
    );
  }
  petCreateModel: any = {
    dto: {
      name: '',
      size: '',
      type: '',
      breed: '',
      species: '',
      ownerId: '',
      dateOfBirth: '',
    },
  };
  submitCreateUser() {
    console.log(this.userCreateModel);
    this.client.post(this.usersUrl, this.userCreateModel.dto).subscribe(
      (data) => {
        this.lastOperationResult = {
          isSuccess: true,
        };
        this.refreshUsers();
        this.userCreateModel = {
          id: '',
          dto: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            address: '',
          },
        };
      },
      (error) => {
        this.lastOperationResult = {
          isSuccess: false,
          message: error.error[0],
        };
      }
    );
  }
  refreshUsers() {
    this.client.get(this.usersUrl).subscribe((data) => {
      this.data.users = data;
    });
  }
  userCreateModel: any = {
    id: '',
    dto: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      address: '',
    },
  };
  editUser(userId: any) {
    this.data.users.forEach(
      (user: {
        phoneNumber: any;
        firstName: any;
        lastName: any;
        email: any;
        password: any;
        address: any;
        id: any;
      }) => {
        if (user.id === userId) {
          this.userUpdateModel.id = user.id;
          this.userUpdateModel.dto = {};
          this.userUpdateModel.dto.firstName = user.firstName;
          this.userUpdateModel.dto.lastName = user.lastName;
          this.userUpdateModel.dto.email = user.email;
          this.userUpdateModel.dto.phoneNumber = user.phoneNumber;
          this.userUpdateModel.dto.password = user.password;
          this.userUpdateModel.dto.address = user.address;
        }
      }
    );
  }

  submitUpdateUser() {
    this.client
      .put(
        this.usersUrl + '/' + this.userUpdateModel.id,
        this.userUpdateModel.dto
      )
      .subscribe(
        (data) => {
          this.refreshUsers();
          this.userUpdateModel = {
            id: '',
            dto: {
              firstName: '',
              lastName: '',
              email: '',
              password: '',
              address: '',
            },
          };
          this.lastOperationResult = {
            isSuccess: true,
          };
        },
        (error) => {
          this.lastOperationResult = {
            isSuccess: false,
            message: error.error[0],
          };
        }
      );
  }

  deleteUser(userID: any) {
    this.client.delete(this.usersUrl + '/' + userID).subscribe((data) => {
      this.refreshUsers();
    });
  }

  // The API URL
  petsUrl = 'https://localhost:7115/api/v1/pets';
  usersUrl = 'https://localhost:7115/api/v1/users';

  // The data we will get from the API
  data: any = {};
  client: HttpClient;
  petUpdateModel: any = {};

  // Inject HttpClient into your component or service.
  constructor(private http: HttpClient) {
    this.client = http;
    // Make the HTTP request:
    this.refreshPets();
  }

  refreshPets() {
    this.client.get(this.petsUrl).subscribe((data) => {
      this.data.pets = data;
      this.data.pets.forEach((pet: { size: { name: any } }) => {
        pet.size = pet.size.name;
      });
    });

    this.client.get(this.usersUrl).subscribe((data) => {
      this.data.users = data;
    });
  }

  deletePet(petId: any) {
    this.client.delete(this.petsUrl + '/' + petId).subscribe((data) => {
      this.refreshPets();
    });
  }

  editPet(petId: any) {
    this.data.pets.forEach(
      (pet: {
        dateOfBirth: any;
        name: any;
        size: any;
        type: any;
        breed: any;
        species: any;
        ownerId: any;
        id: any;
      }) => {
        if (pet.id === petId) {
          this.petUpdateModel.id = pet.id;
          this.petUpdateModel.dto = {};
          this.petUpdateModel.dto.name = pet.name;
          this.petUpdateModel.dto.size = pet.size;
          this.petUpdateModel.dto.type = pet.type;
          this.petUpdateModel.dto.breed = pet.breed;
          this.petUpdateModel.dto.species = pet.species;
          this.petUpdateModel.dto.ownerId = pet.ownerId;
          this.petUpdateModel.dto.dateOfBirth = pet.dateOfBirth;
        }
      }
    );
  }

  submitUpdatePet() {
    console.log(this.petUpdateModel);
    this.client
      .put(this.petsUrl + '/' + this.petUpdateModel.id, this.petUpdateModel.dto)
      .subscribe(
        (data) => {
          this.refreshPets();
          this.lastOperationResult = {
            isSuccess: true,
          };
        },
        (error) => {
          this.lastOperationResult = {
            isSuccess: false,
            message: error.error.message,
          };
        }
      );
    this.petUpdateModel = {};
  }
}
