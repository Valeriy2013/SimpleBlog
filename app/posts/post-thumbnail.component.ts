import { Component, Input } from '@angular/core'

@Component({
    selector: 'post-thumbnail',
    template: `
    <div [routerLink]="['/posts', post.id]" class="well hoverwell thumbnail">
        <h3>{{post?.title}}</h3>
        <div>{{post?.body}}</div>
        <div>Date: {{post?.date}}</div>
        <hr/>
        <div>
            <a (click)="editPost()">Edit</a> 
        </div> 
    </div>    
    `,
    styles: [`
        .thumbnail { min-height: 210px; }
        .well div { color: #bbb; }
    `] 

})
export class PostThumbnailComponent {
    @Input() post: any
}