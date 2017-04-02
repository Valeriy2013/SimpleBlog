import { Component, Input } from '@angular/core'
import { IPost } from "./shared/post.model";

@Component({
    selector: 'post-thumbnail',
    template: `
    <div class="well hoverwell thumbnail">
        <h3>{{post?.title}}</h3>
        <div>{{post?.body}}</div>
        <div>Date: {{post?.date}}</div>
        <hr/>
        <div>            
            <a [routerLink]="['/posts', post.id]">Edit</a>            
        </div>          
    </div>    
    `,
    styles: [`
        .thumbnail { min-height: 210px; }
        .well div { color: #bbb; }
    `] 

})
export class PostThumbnailComponent {
    @Input() post: IPost
}