import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router'
import { Injectable } from '@angular/core'
import { PostService } from '../shared/post.service'

@Injectable()
export class PostRouteActivator implements CanActivate {
        
    constructor(private postService: PostService, private router: Router){

    }
    canActivate(route: ActivatedRouteSnapshot) {
    const postExists = !!this.postService.getPost(+route.params['id'])
            if(!postExists){
                this.router.navigate(['/404'])
            return postExists;
    }
    }
}