import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from '../post-list/post-list.component';
import { PostRoutingModule } from '../post-routing/post-routing.module';
import { MaterialModule } from '../../../modules/material.module';
import { PostDetailComponent } from '../post-detail/post-detail.component';

@NgModule({
  declarations: [PostListComponent, PostDetailComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    MaterialModule
  ]
})
export class PostModule { }
