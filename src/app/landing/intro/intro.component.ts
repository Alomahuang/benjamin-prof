import { Component, OnInit } from '@angular/core';
import { ShapeComponent} from '../shape/shape.component';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  color = this.getRandomColor();
  word ={};
  ob = ['Fun', 'Study', 'Work' ,'Me','You', 'Us', 'Life'];
  idx = 0;
  n = 0;
  write = true;
  wordCurrrent = this.ob[this.idx];
  ln = this.wordCurrrent.length;
  hideL=true;
  delay = 0;

  constructor() { }

  ngOnInit() {
    this.internalInitiate();
    
  }
  
  getRandomColor() {
      let letters = '0123456789ABCDEF'.split(''), color = '#';
      for (var i = 0; i < 6; i++){
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
  }

  internalInitiate(){
    setInterval(() => 
    this.typeEffect(),
    150);
    setInterval(() => 
    this.hideL=!this.hideL,
    600);
  }

  typeEffect(){
    this.wordCurrrent = this.ob[this.idx];
    this.ln = this.wordCurrrent.length;
    if (this.delay) {
      this.delay--;
      return
    }
    if(this.write){
      this.word = this.wordCurrrent.slice(0,this.n);
      this.n++
    };
    if(!this.write){
      this.word = this.wordCurrrent.slice(0,this.n);
      this.n--
    }
    if(this.n===this.ln+1 && this.idx===this.ob.length-1){
      this.delay=20;
      this.write=false;
    } else if (this.n===this.ln+1){
      this.write=false;
      this.delay=4;
    };
    if(this.n===0){
      this.write=true
      this.idx++
    }
    if(this.idx===this.ob.length){ 
      this.idx=0;
    }
  }
}
