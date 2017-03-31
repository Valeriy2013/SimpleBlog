import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { HttpModule } from '@angular/http'
import { FormsModule, ReactiveFormsModule } from "@angular/forms"

import { BlogAppComponent } from './blog-app.component';
import { NavBarComponent } from "./nav/navbar.component";
import { PostsListComponent } from "./posts/posts-list.component";
import { PostThumbnailComponent } from "./posts/post-thumbnail.component";
import { PostService } from "./posts/shared/post.service";
import { TOASTR_TOKEN, Toastr } from "./common/toastr.service"
import { PostDetailsComponent } from "./posts/post-details/post-details.component";
import { appRoutes } from "./routes"
import { CreatePostComponent } from "./posts/create-post.component";
import { Error404Component } from "./errors/404.component";
import { PostRouteActivator } from "./posts/post-details/post-route-activator.service";


declare let toastr : Toastr

@NgModule({
  imports:      [ 
                BrowserModule,
                FormsModule,
                HttpModule,                
                ReactiveFormsModule,
                RouterModule.forRoot(appRoutes)
              ],
  declarations: [ 
              BlogAppComponent,
              NavBarComponent,
              PostsListComponent,
              PostThumbnailComponent,
              PostDetailsComponent,
              CreatePostComponent,
              Error404Component
                      
              ],
  providers: [ 
              PostService,
              {
                provide: TOASTR_TOKEN, 
                useValue: toastr
              },
              PostRouteActivator
  
   ],
  bootstrap:    [ BlogAppComponent ]
})
export class AppModule { }
