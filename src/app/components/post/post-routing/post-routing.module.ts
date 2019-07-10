import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from '../post-list/post-list.component';
import { PostDetailComponent } from '../post-detail/post-detail.component';


const routes: Routes = [
  { path: '', component: PostListComponent },
  { path: '', component: PostDetailComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class PostRoutingModule { }
