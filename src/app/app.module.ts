import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ArtfomComponent } from './pages/artfom/artfom.component';
import { ArtgalleryComponent } from './pages/artgallery/artgallery.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FooterComponent } from './units/footer/footer.component';
import { SinglepageComponent } from './pages/singlepage/singlepage.component';
import { NavbarComponent } from './units/navbar/navbar.component';
import { ArtformpageComponent } from './pages/artformpage/artformpage.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtfomComponent,
    ArtgalleryComponent,
    SignupComponent,
    FooterComponent,
    SinglepageComponent,
    NavbarComponent,
    ArtformpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }