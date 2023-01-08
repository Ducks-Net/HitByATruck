export interface User {
  Id: string;
  FirstName: string;
  LastName: string;
  Address: string;
  PhoneNumber: string;
  Email: string;
  Password: string;
}

export interface UserCreateDto {
  FirstName: string;
  LastName: string;
  Address: string;
  PhoneNumber: string;
  Email: string;
  Password: string;
}

export interface UserLoginDto {
  Email: string;
  Password: string;
}
