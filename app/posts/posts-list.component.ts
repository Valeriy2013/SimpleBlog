import { Component, OnInit } from '@angular/core'
import { PostService } from "./shared/post.service";

@Component({
    selector: 'posts-list',
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
    posts: any[]
    constructor(private postService: PostService){
        
    }

    ngOnInit(){
        this.posts = this.postService.getPosts()
    }
}