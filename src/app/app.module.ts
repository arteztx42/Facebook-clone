import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardGuard } from './utils/guards/auth-guard.guard';

const routes:Routes =[
  {path:'', redirectTo:'login', pathMatch: 'full'},
  {path:'login', component:LoginComponent,canActivate:[]},
  {path:'homepage', component:HomepageComponent,canActivate:[AuthGuardGuard]},
  // {path:'edit/:id', component:EdituserComponent},
  // // {path:'single', component:SingleuserComponent},
  // {path:'single/:id', component:SingleuserComponent},
  {path:'layout', loadChildren: () => import('./layout/layout.module').then(a=>a.LayoutModule
  ) }
  ]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
