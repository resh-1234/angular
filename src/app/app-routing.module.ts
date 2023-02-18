import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtfomComponent } from './pages/artfom/artfom.component';
import { ArtgalleryComponent } from './pages/artgallery/artgallery.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SinglepageComponent } from './pages/singlepage/singlepage.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'artfom',component:ArtfomComponent
    
  },
  {
    path:'artgallery',component:ArtgalleryComponent
  },
  {
    
    path:'signup',component:SignupComponent
  },
  {
    path:'singlepage',component:SinglepageComponent
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

