import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './intro/intro.component';
import { LandingComponent } from './landing.component';
import { ShapeComponent } from './shape/shape.component';

@NgModule({
  declarations: [IntroComponent, LandingComponent, ShapeComponent],
  imports: [
    CommonModule
  ]
})
export class LandingModule { }
