import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule, Routes } from '@angular/router';
import { FriendsComponent } from './friends/friends.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PostingComponent } from './posting/posting.component';




const routes:Routes =[
  {path:'', component:LayoutComponent, 
  children: [
  {path:'posting', component:PostingComponent},
  {path:'friends', component:FriendsComponent},
  ]



},
// {path:'posting', component:PostingComponent},
// {path:'friends', component:FriendsComponent},
]


@NgModule({
  declarations: [
    LayoutComponent,
    FriendsComponent,
    HeaderComponent,
    FooterComponent,
    PostingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LayoutModule { }
