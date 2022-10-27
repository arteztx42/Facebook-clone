import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from 'src/app/utils/services/apicall.service';


@Component({
  selector: 'app-posting',
  templateUrl: './posting.component.html',
  styleUrls: ['./posting.component.css']
})
export class PostingComponent implements OnInit {
users:any=[]
<<<<<<< HEAD
ids:any=[]
  constructor(private router: Router, private api: ApicallService) { 
=======
public name: string = "Ramandip Singhh";

  constructor(private router: Router, private api: ApicallService) {
>>>>>>> e849a23b530af47197c1bedf012a9f84770228ef

  }

  ngOnInit() {
  this.getusers()
  }

private getusers(){
  this.api.getUsers().subscribe((response:any)=>{
    this.users=response.data;
  })
}
private getUserById(id:any){
  this.api.getUserById(id).subscribe((respo:any)=>{
    this.ids=respo.data;
  })  
}
public loadPhoto(){
this.router.navigateByUrl('/id')
}
}
