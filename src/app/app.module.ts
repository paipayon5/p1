import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { Route, RouterModule } from '@angular/router';
import { HeaderProfileComponent } from './header-profile/header-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostComponent } from './post/post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { HttpClientModule } from '@angular/common/http';
const route: Route[] = [
  {
    path: 'profile',
    component: ProfileComponent
  },{path:'post',component:PostComponent},
  {path:'post/:id',component:PostDetailComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HeaderProfileComponent,
    PostComponent,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
