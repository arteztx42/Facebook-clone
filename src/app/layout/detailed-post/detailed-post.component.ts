import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from 'src/app/utils/services/apicall.service';

@Component({
  selector: 'app-detailed-post',
  templateUrl: './detailed-post.component.html',
  styleUrls: ['./detailed-post.component.css']
})
export class DetailedPostComponent implements OnInit {
users:any=[];
selectedUsers:any="";

  constructor(private router: Router, private api: ApicallService) { }

  ngOnInit(){
    this.selectedUsers=this.api.selectedUsers
    console.log(this.selectedUsers)
    this.api.selectedUserBehaviorSubject.subscribe((resp:any)=>{
      this.selectedUsers=resp
      console.log(this.selectedUsers)
    })
}
}



