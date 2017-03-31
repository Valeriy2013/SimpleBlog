import { Routes } from '@angular/router'
import { PostsListComponent } from './posts/posts-list.component'
import { PostDetailsComponent } from './posts/post-details/post-details.component'
import { CreatePostComponent } from './posts/create-post.component'
import { Error404Component } from './errors/404.component'
import { PostsListResolver } from "./posts/posts-list-resolver.service";
//mport { PostRouteActivator } from "./posts/post-details/post-route-activator.service";
// import { PostsListResolver } from './posts/posts-list-resolver.service'
// import { CreateSessionComponent } from './posts/post-details/create-session.component'
// import { PostResolver } from "./posts/post-resolver.service";


export const appRoutes: Routes = [
    {path: 'posts/new', component: CreatePostComponent, canDeactivate: ['canDeactivateCreatePost']},
    {path: 'posts', component: PostsListComponent , resolve: {posts: PostsListResolver}},
    {path: 'posts/:id', component: PostDetailsComponent},//, resolve: {post: PostResolver}
    {path: '404', component: Error404Component},
    {path: 'user', loadChildren: 'app/user/user.module#UserModule'},
    {path: '', redirectTo: '/posts', pathMatch: 'full'}
    ]