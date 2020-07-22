import { Component, OnInit, HostListener } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  scrolled: boolean;
  isLanding: boolean;
  location: string;
  hideNavInt : boolean;
  constructor(location: Location) {
    this.location = location.path();
  }

  ngOnInit() {
    if (this.location.indexOf('introduction')>0){
      this.hideNavInt = true;
    } else {
      this.hideNavInt = false;
      this.scrolled = true; 
    }
  }
  
  @HostListener("window:scroll", [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number >= 1) {
      this.scrolled=true;
    } else if( !this.hideNavInt ){
      this.scrolled=true;
    } else {
      this.scrolled=false;
    }

  }
}
