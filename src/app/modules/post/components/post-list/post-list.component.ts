import { Component, OnInit, Input } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { PostService } from '../../services/post.service';
import { Post } from '../../../../models/post';
import { User } from '../../../../models/user';
import { Comment } from '../../../../models/comment';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  user$: any;
  post$: any;
  comment$: any;
  @Input() user: User;
  @Input() post: Post;
  @Input() comment: Comment;
  len: any;
  show: any;
  counter = 1;
  endItem: any;
  select: number;

  ngOnInit(): void {
    this.fetchPost();
    this.fetchUser();
    this.fetchComment();
    this.select=5;
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
      this.show = res.slice(0, 10);
      this.len = res.length;
    });
  }

  fetchComment() {
    this.comment$ = this.postService.fetchUser();
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

  pageChanged(event: PageChangedEvent): void {
    if (this.select == 10){
      const startItem = (event.page - 1) * event.itemsPerPage;
      this.endItem = event.page * event.itemsPerPage;
      this.show = Object.keys(this.post).slice(startItem, this.endItem).map(key => this.post[key]);
    } else {
      const startItem = (event.page - 1) * this.select;
      this.endItem = event.page * this.select;
      this.show = Object.keys(this.post).slice(startItem, this.endItem).map(key => this.post[key]);
    }
  }
  
  onChange(event) {
    this.select = event;
  }

}