import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { PostService } from "./shared/post.service";

@Injectable()
export class PostResolver implements Resolve<any>{
    constructor(private postService: PostService){
        
    }
        resolve(route: ActivatedRouteSnapshot) {
            return this.postService.getPost(route.params['id'])
        }
    }