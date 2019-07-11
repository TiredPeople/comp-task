import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from '../user-list/user-list.component';
import { UserRoutingModule } from '../user-routing/user-routing.module';
import { MaterialModule } from '../../../modules/material.module';
import { UserProfileComponent } from '../user-profile/user-profile.component';

@NgModule({
  declarations: [UserListComponent, UserProfileComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule
  ]
})
export class UserModule { }
