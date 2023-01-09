export interface Appointment {
  Id: string,
  LocationId: string,
  PetId: string,
  VetId: string,
  StartTime: string,
  EndTime: string,
  Type: string,
  NeedsCage: boolean,
}
