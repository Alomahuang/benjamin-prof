import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.css']
})
export class ShapeComponent implements OnInit {
  colorArray=['A0DDFF','758ECD','C1CEFE','7189FF','624CAB', '99ACFF','859BFF'];
  color = this.getRandomColor();
  width = this.getRandomwidth();
  position =this.getRandomPosition();
  shape = "ok";
  topdistance = this.getRandomtop();
  floatdecider = this.getRandomfloat();
  random30 = this.getRandom30();
  classObject: Object = {"Onlyborder": this.random30};
  constructor() { }

  ngOnInit() {
  }
  
  getRandomColor() {
    let color = '#';
    color += this.colorArray[Math.floor(Math.random() * 7)];
    console.log(color);
    return color;
}

  getRandomwidth(){
    
  let width=(Math.random()*250)+50+'px';
  return width;
}

getRandomPosition(){
  let position=(Math.random()*window.innerWidth)-200+'px';
  return position;
}

getRandomtop(){
  let topDistance=(Math.random()*150)+'px';
  return topDistance;
}

 getRandomfloat(){
   let t= false;
   t = Math.random() >= 0.5;
   return t;
 }

 getRandom30(){
  let t= false;
  t = Math.random() >= 0.7;
  return t;
}
}
