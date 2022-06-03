import { User } from './../models/user';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  url = "http://localhost:3000/login"

  login(user: User): Observable<any>{

    return this.httpClient.post(this.url, JSON.stringify(user), {

      headers: new HttpHeaders ({'Content-Type': 'application/json'}),
      observe: "response"

    }
    )
  }
}