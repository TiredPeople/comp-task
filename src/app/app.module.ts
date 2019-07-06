import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';

import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { LoginFormComponent} from './login/login-form/login-form.component';
import { PostListComponent } from './post/post-list/post-list.component';

import { MaterialModule } from './material/material.module';
import { RoutingModule } from './routing/routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user/user-list/user.service';
import { PostService } from './post/post-list/post.service';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    UserListComponent,
    LoginFormComponent,
    PostListComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    RoutingModule,
    HttpClientModule

  ],
  providers: [ UserService, PostService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
