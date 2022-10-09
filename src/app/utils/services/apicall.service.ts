import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  storedData:any=[];

  
  getUserBy(first_name: any) {
    throw new Error('Method not implemented.');
  }
  getUserByName(first_name: any) {
    throw new Error('Method not implemented.');
  }
  getUserByEmail(email: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  public login(params:any): Observable<any> {
  return this.http.post('http://reqres.in/api/login', params)
  }
  getUsers(){
    return this.http.get('https://reqres.in/api/users')
  }
  getUserById(id:any){
    return this.http.get('https://reqres.in/api/users/'+id)
  }
}
