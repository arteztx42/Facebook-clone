import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApicallService } from '../utils/services/apicall.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  users:any=[]
  constructor(private api: ApicallService, private router: Router) { }

  ngOnInit() {
  if(!this.api.storedData.length){
    this.getusers()
  }
  else{
    this.users=this.api.storedData;
  }
  }

  
  private getusers(){
    this.api.getUsers().subscribe((response:any)=>{
      this.api.storedData=response.data;
      this.users=this.api.storedData;
    })

  }
  public onEdit(id:string){
  this.router.navigateByUrl("edit/"+id)
  }
  public onDelete(id:string, first_name:string){
    console.log(id,first_name)
    this.api.storedData.forEach((element:any, index:any) => {
    if(element.id==id){
    this.users.splice(index, 1)  
    console.log(element) 
    }
    })
  }
  public onView(id:string){
    this.router.navigateByUrl("single/"+id)
  }

  public logout(){
    localStorage.removeItem("isLoggedIn");
    this.router.navigateByUrl('/login')
  }

}
