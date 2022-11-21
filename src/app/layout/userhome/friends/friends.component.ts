import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from 'src/app/utils/services/apicall.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  users:any=[]
  ids:any=[]
  selectedUsers:any=[];
     
  public name: string = "Ramandip Singhh";
  
  
  constructor(private router: Router, private api: ApicallService) { }

  ngOnInit() {
    this.getusers()
  }

  private getusers(){
    this.api.getUsers().subscribe((response:any)=>{
      this.users=response;
      this.api.selectedUsers=this.users[0];
      console.log(response)
    })
  }
  private getUserById(id:any){
    this.api.getUserById(id).subscribe((respo:any)=>{
      this.ids=respo.data;
    })  
}
}
