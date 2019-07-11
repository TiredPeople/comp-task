import { Component, OnInit, Input } from '@angular/core';

import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';
import { Post } from '../../../models/post';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  user$: any;
  post$: any;
  @Input() user: User;
  @Input() post: Post;

  ngOnInit() {
    this.fetchUser();
    this.fetchPost();
  }

  constructor(private userService: UserService) {}


  fetchUser() {
    this.user$ = this.userService.fetchUser();
    this.user$.subscribe((res: any) => {
      this.user = res;
    });
  }

  fetchPost() {
    this.post$ = this.userService.fetchPost();
    this.post$.subscribe((res: any) => {
      this.post = res;
    });
  }

}
