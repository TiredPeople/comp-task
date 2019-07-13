import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../components/app/app.component';
import { LayoutComponent } from '../components/layout/layout.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { HomeComponent } from '../components/home/home.component';
import { UserListComponent } from './user/components/user-list/user-list.component';
import { UserProfileComponent } from './user/components/user-profile/user-profile.component';
import { LoginFormComponent} from './login/components/login-form/login-form.component';
import { PostListComponent } from './post/components/post-list/post-list.component';
import { PostDetailComponent } from './post/components/post-detail/post-detail.component';

import { MaterialModule } from './material.module';
import { RoutingModule } from '../components/routing/routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user/services/user.service';
import { PostService } from './post/services/post.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LyThemeModule, LY_THEME } from '@alyle/ui';
import { LyButtonModule } from '@alyle/ui/button';
import { LyToolbarModule } from '@alyle/ui/toolbar';
import { LyResizingCroppingImageModule } from '@alyle/ui/resizing-cropping-images';
import { MinimaLight, MinimaDark } from '@alyle/ui/themes/minima';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    UserListComponent,
    LoginFormComponent,
    PostListComponent,
    UserProfileComponent,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    RoutingModule,
    HttpClientModule,
    NgbModule.forRoot(),
    PaginationModule.forRoot(),
    LyThemeModule.setTheme('minima-light'),
    LyButtonModule,
    LyToolbarModule,
    LyResizingCroppingImageModule
  ],
  providers: [
    UserService,
    PostService,
    { provide: LY_THEME, useClass: MinimaLight, multi: true },
    { provide: LY_THEME, useClass: MinimaDark, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
