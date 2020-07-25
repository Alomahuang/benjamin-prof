import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PostComponent implements OnInit {
  post: string;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      //dev
      console.log(params);
      //this.post = './assets/blog/post/' +  params['postId'] + '.md';
      //prod
      this.post ='https://raw.githubusercontent.com/Alomahuang/benjamin-prof/master/docs/assets/blog/' + params['postId'] + '.md';
    });
  }

}
