import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { PostService } from '../../services/post.service';
import { Post } from '../../../../models/post';
import { User } from '../../../../models/user';
import { Comment} from '../../../../models/comment';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  @Input() user: User;
  @Input() post: Post;
  @Input() comment: Comment;
  href: any;
  date: Date;
  counter = 0;

  ngOnInit(): void {
    this.route.params.subscribe( (res: any) => {
      this.href = res;
    });

    this.date = new Date();

    this.fetchPost();
    this.fetchUser();
    this.fetchComment();

  }

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  fetchUser() {
    let user$: any;
    user$ = this.postService.fetchUser();
    user$.subscribe((res: any) => {
      this.user = res;
    });
  }

  fetchPost() {
    let post$: any;
    post$ = this.postService.fetchPost();
    post$.subscribe((res: any) => {
      this.post = res;
    });
  }

  fetchComment() {
    let comment$: any;
    comment$ = this.postService.fetchComment();
    comment$.subscribe((res: any) => {
      this.comment = res;
    });
  }

  increment() {
    if ( this.counter >= 1) {
      return
    }
    this.counter += 1;
  }
  decrement() {
    if ( this.counter <= 0) {
      return
    }
    this.counter -= 1;
  }

}
