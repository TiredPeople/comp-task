import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { UserListComponent } from '../../modules/user/components/user-list/user-list.component';
import { UserProfileComponent } from '../../modules/user/components/user-profile/user-profile.component';
import { LoginFormComponent} from '../../modules/login/components/login-form/login-form.component';
import { PostListComponent } from '../../modules/post/components/post-list/post-list.component';
import { PostDetailComponent } from '../../modules/post/components/post-detail/post-detail.component';

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
