import { Component } from '@angular/core';

@Component({
  selector: 'blog-app',
  template: `<h1>My super blog</h1>
             <nav-bar></nav-bar>
             <router-outlet></router-outlet>
            `,
})
export class BlogAppComponent  {
 
}
