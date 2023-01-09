export interface Pet {
  Id: string,
  Name: string,
  DateOfBirth: Date,
  Species: string,
  Breed: string,
  OwnerId: string,
  Size: string,
}

export interface PetCreateDto {
  Name: string,
  DateOfBirth: string,
  Species: string,
  Breed: string,
  OwnerId: string,
  Size: string,
}
