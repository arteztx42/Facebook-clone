import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApicallService } from 'src/app/utils/services/apicall.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private fb: FormBuilder,
    private api: ApicallService) { }

  ngOnInit(): void {
  }

  
  public signout(): void{
    // alert('NO AUTHORIZATION')
    // if (){
    //   console.log(this.loginForm.value)
      // localStorage.setItem("signedout",'signedout' )
      localStorage.removeItem("userData")
      this.router.navigateByUrl('/login')
     alert('You are signed out')

}
  }
