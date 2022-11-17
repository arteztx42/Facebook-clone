import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from 'src/app/utils/services/apicall.service';


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  users:any=[];
  selectedUsers:any=""
  selectedUser:any=""

  constructor(private router: Router, private api: ApicallService) { }

  ngOnInit() {
    if(!this.api.selectedUsers.length){
      this.getusers()
    }
    else{
      this.users=this.api.selectedUsers;
    }
    }

  private getusers(){
    this.api.getUsers().subscribe((response:any)=>{
      this.api.selectedUsers=response;
      // this.api.selectedUsers=this.users[0]
      this.users=this.api.selectedUsers;
    }
    )
  }
  public loadPhoto(user:any){
    // console.log(user)
    this.selectedUser=user;
    this.api.selectedUsers=user;
    this.api.selectedUserBehaviorSubject.next(user)
    
  }
}
