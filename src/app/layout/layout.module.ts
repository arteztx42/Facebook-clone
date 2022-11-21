import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TESTComponent } from '../test/test.component';
import { UserprofileComponent } from './userprofile/userprofile.component';


const routes:Routes =[
  {path:'', component:LayoutComponent, 
  children: [
  {path:"", pathMatch:"full", redirectTo:"userhome"},
  {path:'userprofile', component:UserprofileComponent},
  {path:'userhome', loadChildren: () => import('./userhome/userhome.module').then(a=>a.UserhomeModule)}
  ]


},
]

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    TESTComponent,
    UserprofileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LayoutModule { }
