import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from '../user-list/user-list.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';

let id: number;


const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: '', component: UserProfileComponent }
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
export class UserRoutingModule { }
