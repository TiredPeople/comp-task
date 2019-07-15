import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { UserService } from '../../services/user.service';
import { User } from '../../../../models/user';
import { Post } from '../../../../models/post';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  @Input() user: User;
  @Input() post: Post;
  href: any;

  ngOnInit(): void {
    this.route.params.subscribe( (res: any) => {
      this.href = res;
    });

    this.fetchUser();
    this.fetchPost();
  }

  constructor(private userService: UserService,private route: ActivatedRoute) {}


  fetchUser() {
    let user$: any;
    user$ = this.userService.fetchUser();
    user$.subscribe((res: any) => {
      this.user = res;
    });
  }

  fetchPost() {
    let post$: any;
    post$ = this.userService.fetchPost();
    post$.subscribe((res: any) => {
      this.post = res;
    });
  }

}

