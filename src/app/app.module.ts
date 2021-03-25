import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { UsersComponent } from './components/users/users.component';
import {RouterModule, Routes} from '@angular/router';
import {UserResolveService} from './service/resolve/user-resolve.service';
import { UserComponent } from './components/user/user.component';
import { FullUserComponent } from './components/full-user/full-user.component';
import { PostComponent } from './components/post/post.component';
import {PostsComponent} from './components/posts/posts.component';


const routes: Routes = [
  {path: 'user', component: UsersComponent, resolve: {userData: UserResolveService}
  , children: [{path: ':id', component: FullUserComponent}] },
  {path: '', redirectTo: 'user', pathMatch: 'full'},
  {path: 'user', component: FullUserComponent , children: [{path: 'userId', component: PostsComponent}]}
  ];


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    FullUserComponent,
    PostsComponent,
    PostComponent

    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
