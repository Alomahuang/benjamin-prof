import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './blog/post/post.component';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';

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
    path: 'post/:postId',
    component: PostComponent,
  },
  { 
    path: '',
    redirectTo: '/introduction', 
    pathMatch: 'full'
  },
  {
    path: '**',
    component: LandingComponent
  },
];

@NgModule({
  imports: 
  [RouterModule.forRoot(routes),
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
