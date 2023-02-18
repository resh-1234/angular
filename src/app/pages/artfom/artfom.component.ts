import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { data } from 'src/assets/data';

@Component({
  selector: 'app-artfom',
  templateUrl: './artfom.component.html',
  styleUrls: ['./artfom.component.css']
})
export class ArtfomComponent {
  artform=data
  i:any;
    ngOninit():void{
      this.artform=data
    }

  constructor(private router: Router){}

  gotoHere(id: any){
  localStorage.setItem('id',id);
  this.router.navigate(['/singlepage']);
  
  
  }
}
