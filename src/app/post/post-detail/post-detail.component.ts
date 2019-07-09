import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { PostService } from '../post.service';
import { Post } from '../post';
import { User } from '../user';
import { Comment} from '../comment';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  user$: any;
  post$: any;
  comment$: any;
  @Input() user: User;
  @Input() post: Post;
  @Input() comment: Comment;
  href: any;
  page: any;
  counter = 0;

  ngOnInit(): void {
    this.route.params.subscribe( (res: any) => {
      this.href = res;
    });

    this.fetchPost();
    this.fetchUser();
    this.fetchComment();

  }

  constructor(private route: ActivatedRoute, private postService: PostService) { }

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

  fetchComment() {
    this.comment$ = this.postService.fetchComment();
    this.comment$.subscribe((res: any) => {
      this.comment = res;
    });
  }

  increment() {
    if ( this.counter === 0) {
      this.counter = 1;
    }
    this.counter += 1;
  }
  decrement() {
    if ( this.counter === 0) {
      this.counter = 1;
    }
    this.counter -= 1;
  }

}
