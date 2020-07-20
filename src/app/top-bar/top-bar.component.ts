import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  scrolled: boolean;
  constructor() { }

  ngOnInit() {
  }
  
  @HostListener("window:scroll", [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 100) {
      console.log('You are 100px from the top to bottom');
      this.scrolled=true;
    } else {
      console.log('noemal');
      this.scrolled=false;
    }

  }
}
