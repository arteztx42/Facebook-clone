import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignoutGuard implements CanActivate {

  constructor(private router:Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
   if (localStorage.getItem("userData")){
    // localStorage.removeItem('userData')
    this.router.navigate(['/layout']);
    return false;
   }
   else{
    return true;
   }
  // }
  // else{
  //   alert('NO AUTHORIZATION');
  //   this.router.navigate(['/login'])
  //   return false
  // }
  // // return true;
}
}  

