import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [

  {
    path: 'introduction',
    component: LandingComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: '**',
    component: LandingComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
