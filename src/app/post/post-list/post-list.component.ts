import { Component, OnInit, Input } from '@angular/core';

import { PostService } from './post.service';
import { Post } from './post';
import { User } from './user';

import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  user$: any;
  post$: any;
  @Input() user: User;
  @Input() post: Post;
  length: 100;
  pageSize: 10;
  pageSizeOptions: number[] = [10, 20, 25, 50, 100];

  pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  ngOnInit() {
    this.fetchPost();
    this.fetchUser();
  }

  constructor(private postService: PostService) { }

  fetchUser() {
    this.user$ = this.postService.fetchUser();
    this.user$.subscribe((res: any) => {
      this.user = res;
    });
  }

  fetchPost() {
    this.post$ = this.postService.fetchPost();
    this.post$.subscribe((res: any) => {
      this.post = res;
    });
  }

}
