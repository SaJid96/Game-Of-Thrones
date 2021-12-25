import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = 'https://thronesapi.com/api/v2/Characters';

  //  curl -X 'GET' \
  //   '' \
  //   -H 'accept: application/json'
  constructor(private http: HttpClient) {}

  getUser() {
    return this.http.get(this.url);
  }
}
