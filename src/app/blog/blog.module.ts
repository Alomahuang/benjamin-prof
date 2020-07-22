import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { PostComponent } from './post/post.component';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [BlogComponent, PostComponent],
  imports: [
    CommonModule,
    MarkdownModule
  ]
})
export class BlogModule { }
