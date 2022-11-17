import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  selectedUsers:any=[];
  selectedUserBehaviorSubject= new BehaviorSubject("");
  storedData:any=[];
  users:any=[]

  constructor(private http: HttpClient) { }

  public login(params:any): Observable<any> {
  return this.http.post('http://reqres.in/api/login', params)
  }
  getUsers(){
    return this.http.get('../../../assets/MOCK.JSON') 
  }
  getUserById(id:any){
    return this.http.get('https://reqres.in/api/users/'+id)
  }
}
