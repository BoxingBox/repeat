import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  // get(){return [
  //   'Ann',
  //   'Bob',
  //   'Claire',
  //   'David'];}

  get(){
    return this.http.get('https://reqres.in/api/users?page=2');
  }
}
