import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule, Routes } from '@angular/router';
import { FriendsComponent } from './friends/friends.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PostingComponent } from './posting/posting.component';
import { DetailedPostComponent } from './detailed-post/detailed-post.component';
import { PhotosComponent } from './photos/photos.component';
import { NgModel } from '@angular/forms';




const routes:Routes =[
  {path:'', component:LayoutComponent, 
  children: [
  {path:'posting', component:PostingComponent},
  {path:'friends', component:FriendsComponent},
  {path:"**", pathMatch:"full", redirectTo:"posting"}
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
    PostingComponent,
    DetailedPostComponent,
    PhotosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LayoutModule { }
