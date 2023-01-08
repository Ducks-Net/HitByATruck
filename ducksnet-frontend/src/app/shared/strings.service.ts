import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringsService {

  constructor() { }

  public static getBaseUrl(): string {
    return 'https://localhost:7115/';
  }
}
