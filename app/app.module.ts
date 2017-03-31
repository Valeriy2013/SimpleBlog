import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BlogAppComponent } from './blog-app.component';
import { NavBarComponent } from "./nav/navbar.component";
import { PostsListComponent } from "./posts/posts-list.component";
import { PostThumbnailComponent } from "./posts/post-thumbnail.component";
import { PostService } from "./posts/shared/post.service";
import { TOASTR_TOKEN, Toastr } from "./common/toastr.service"

declare let toastr : Toastr

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
              BlogAppComponent,
              NavBarComponent,
              PostsListComponent,
              PostThumbnailComponent
                      
              ],
  providers: [ 
              PostService,
              {
                provide: TOASTR_TOKEN, 
                useValue: toastr
              },
  
   ],
  bootstrap:    [ BlogAppComponent ]
})
export class AppModule { }
