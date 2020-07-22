import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BlogComponent implements OnInit {
  post: string;
  constructor() { }

  ngOnInit() {
    this.post = './assets/blog/list.md';
  }

}
