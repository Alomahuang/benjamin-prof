import { Component, OnInit } from '@angular/core';
import { ShapeComponent} from '../shape/shape.component';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  color = this.getRandomColor();
  test ={};
  word ={};
  ob = ['Shopping','Class','Life'];
  idx = 0;
  n = 0;
  write = true;
  wordCurrrent = this.ob[this.idx];
  ln = this.wordCurrrent.length;
  hideL=true;

  constructor() { }

  ngOnInit() {
    this.typeEffect();
    
  }
  
  getRandomColor() {
      let letters = '0123456789ABCDEF'.split(''), color = '#';
      for (var i = 0; i < 6; i++){
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
  }

  typeEffect(){
    setInterval(() => 
    this.a(),
    200);
    setInterval(() => 
    this.hideL=!this.hideL,
    600);
  }

  a(){
    this.wordCurrrent = this.ob[this.idx];
    if(this.write){
      this.test = this.wordCurrrent.slice(0,this.n);
      this.n++
    };
    if(this.n===this.ln+1){this.write=false};
    if(!this.write){
      this.test = this.wordCurrrent.slice(0,this.n);
      this.n--
    }
    if(this.n===0){
      this.write=true
      this.idx++
    }
    if(this.idx===this.ob.length){
      this.idx=0;
    }
  }
}
