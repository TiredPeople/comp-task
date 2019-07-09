import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { UserListComponent } from '../user/user-list/user-list.component';
import { UserProfileComponent } from '../user/user-profile/user-profile.component';
import { LoginFormComponent} from '../login/login-form/login-form.component';
import { PostListComponent } from '../post/post-list/post-list.component';
import { PostDetailComponent } from '../post/post-detail/post-detail.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'users', component: UserListComponent },
  { path: 'users/:id', component: UserProfileComponent},
  { path: 'form', component: LoginFormComponent },
  { path: 'posts', component: PostListComponent },
  { path: 'posts/:id', component: PostDetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
