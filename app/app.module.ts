import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BlogAppComponent } from './blog-app.component';
import { NavBarComponent } from "./nav/navbar.component";
import { PostsListComponent } from "./posts/posts-list.component";
import { PostThumbnailComponent } from "./posts/post-thumbnail.component";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
              BlogAppComponent,
              NavBarComponent,
              PostsListComponent,
              PostThumbnailComponent           
              ],
  bootstrap:    [ BlogAppComponent ]
})
export class AppModule { }
