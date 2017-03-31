import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PostService } from "./shared/post.service";

@Component({
    templateUrl: 'app/posts/create-post.component.html',
    styles: [`
      em { float: rigth; color: #E05C65; padding-left: 10px; }
      .error input { background-color:#E3C3C5; }
      .error ::-webkit-input-placeholder { color: #999; }
      .error ::-moz-placeholder { color: #999; }
      .error :-moz-placeholder { color: #999; }
      .error :ms-input-placeholder { color: #999; }
    `]
})
export class CreatePostComponent {
        
    isDirty:boolean = true
    post:any

    constructor(private route: Router, private postService: PostService){
        
    }

    /*ngOnInit() {
        this.event = {
            id: 1,
            name: 'New Event',
            date: new Date('9/12/2036'),
            time: '10:00 am',
            price: 55.99,
            imageUrl: '/app/assets/images/angularconnect-shield.png',
            location: {
                address: '43 DT',
                city: 'MyCity',
                country: 'MyCountry'
            },
        }    
    }*/

    savePost(formValues) {
        // this.postService.savePost(formValues).subscribe(post => {
        //     this.route.navigate(['/posts'])
        //     this.isDirty = false            
        // })        
    }

    cancel(){
        this.route.navigate(['/posts'])
    }
}