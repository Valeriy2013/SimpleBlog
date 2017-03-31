import { Component, OnInit } from '@angular/core'
import { PostService } from "./shared/post.service";
import { ActivatedRoute } from "@angular/router";
import { IPost } from "./shared/post.model";

@Component({
    //selector: 'posts-list',
    template: `<div>
                    <h2>My posts</h2>
                    <hr/>
                    <div class="row">
                        <div *ngFor="let post of posts">
                            <post-thumbnail [post]="post"></post-thumbnail>
                        </div>
                    </div>
              </div>
              `
})
export class PostsListComponent implements OnInit {
    posts: IPost[]
    constructor(private postService: PostService, private route: ActivatedRoute){
        
    }

    ngOnInit(){
        this.posts = this.route.snapshot.data['posts']
    }
}