import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApicallService } from '../utils/services/apicall.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],

  })
  constructor(private router: Router, private fb: FormBuilder,
    private api: ApicallService) { }

  ngOnInit(): void {
  }

  public submit(): void{
    console.log(this.loginForm.value)
    if (this.loginForm.valid){
      console.log(this.loginForm.value);
      localStorage.setItem("userData", JSON.stringify(this.loginForm.value))

      this.router.navigateByUrl('/layout')
      console.log('it works?')
    }
  }
  

}
