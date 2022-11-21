import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserhomeComponent } from './userhome.component';
import { RouterModule, Routes } from '@angular/router';
import { FriendsComponent } from './friends/friends.component';
import { DetailedPostComponent } from './detailed-post/detailed-post.component';
import { PhotosComponent } from './photos/photos.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ArchiveComponent } from './archive/archive.component';



const routes:Routes =[
  {path:'', component:UserhomeComponent, 
  children: [
  {path:"", pathMatch:"full", redirectTo:"friends"},
  // {path:'posting', component:PostingComponent},
  {path:'friends', component:FriendsComponent},
  {path:'timeline', component:TimelineComponent},
  {path:'archive', component:ArchiveComponent},
  ]
  }]

@NgModule({
  declarations: [
    UserhomeComponent,
    DetailedPostComponent,
    PhotosComponent,
    FriendsComponent,
    TimelineComponent,
    ArchiveComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserhomeModule { }
