import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { PostService } from "./shared/post.service";

@Injectable()
export class PostsListResolver implements Resolve<any>{
    constructor(private postService: PostService){
        
    }
        resolve() {
            //return this.postService.getPosts().map(posts => posts)
            return this.postService.getPosts()
        }
    }