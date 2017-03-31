import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/post.service';
import { ActivatedRoute, Params } from '@angular/router'
import { IPost } from "../shared/post.model";


@Component({
    templateUrl: 'app/posts/post-details/post-details.component.html',
    styles: [
        `
        .container { padding-left: 20px; padding-right: 20px; }
        a {cursor: pointer }
        `
    ]
})
export class PostDetailsComponent implements OnInit {
        post:IPost
        addMode:boolean
        
        constructor(private postService : PostService, private route : ActivatedRoute){}
        ngOnInit(){
            this.post = this.postService.getPost(+this.route.snapshot.params['id'])
     //       this.route.data.forEach((data) => {
     //           this.post = data['post'];
     //           }) //reset view to default, also need to remove sorting and filtering if needed
        }        
    }