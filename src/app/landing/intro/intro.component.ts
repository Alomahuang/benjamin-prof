import { Component, OnInit } from '@angular/core';
import { ShapeComponent} from '../shape/shape.component';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  color = this.getRandomColor();
  constructor() { }

  ngOnInit() {
  }
  
  getRandomColor() {
      let letters = '0123456789ABCDEF'.split(''), color = '#';
      for (var i = 0; i < 6; i++){
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
  }
}
