import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { StringsService } from '../shared/strings.service';
import { User, UserCreateDto, UserLoginDto } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loggedUser: User | undefined = undefined;
  apiURL = StringsService.getBaseUrl() + 'api/v1/users';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) {
    console.log('UserService constructor');
  }

  public registerUser(dto: UserCreateDto) {
    return this.httpClient.post(this.apiURL, dto, this.httpOptions);
  }

  public async loginUser(dto: UserLoginDto) {
    var users: any = undefined;

    var obs = this.httpClient
      .get(this.apiURL, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));

    await obs.forEach(
      (data) => {
        users = data;
      }
    );

    for (var i = 0; i < users.length; i++) {
      if (users[i].email == dto.Email && users[i].password == dto.Password) {
        this.loggedUser = {
          Id: users[i].id,
          FirstName: users[i].firstName,
          LastName: users[i].lastName,
          Email: users[i].email,
          Password: users[i].password,
          Address: users[i].address,
          PhoneNumber: users[i].phoneNumber,
        }
        return true;
      }
    }
    return false;
  }

  public getLoggedUser() {
    console.log('UserService getLoggedUser');
    return this.loggedUser;
  }

  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
