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
  apiURL = StringsService.getBaseUrl() + 'api/v1/users';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) {}

  public registerUser(dto: UserCreateDto) {
    return this.httpClient.post(this.apiURL, dto, this.httpOptions);
  }

  public async loginUser(dto: UserLoginDto) {
    var UserID = undefined;
    var users: any = undefined;

    var obs = this.httpClient
      .get(this.apiURL, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));

    await obs.forEach(
      (data) => {
        users = data;
      }
    );

    console.log(dto);
    console.log(users);

    for (var i = 0; i < users.length; i++) {
      if (users[i].email == dto.Email && users[i].password == dto.Password) {
        UserID = users[i].id;
        break;
      }
    }
    if (UserID == undefined) {
      console.log('User not found');
      return false;
    }
    console.log('User found');
    return true;
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
