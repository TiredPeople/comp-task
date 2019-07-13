import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostRoutingModule } from './post-routing.module';
import { MaterialModule } from '../../modules/material.module';
import { PostDetailComponent } from './components/post-detail/post-detail.component';

@NgModule({
  declarations: [PostListComponent, PostDetailComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    MaterialModule
  ]
})
export class PostModule { }
