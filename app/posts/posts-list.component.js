"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var PostsListComponent = (function () {
    function PostsListComponent() {
        this.posts = [
            {
                id: 1,
                title: 'Post #1 title',
                body: "Post #1 body\n                qwe asd zcx ads qwe asd zcc\n                qwe asd zcx ads qwe asd zcc\n                qwe asd zcx ads qwe asd zcc\n                qwe asd zcx ads qwe asd zcc\n                qwe asd zcx ads qwe asd zcc\n                qwe asd zcx ads qwe asd zcc\n                qwe asd zcx ads qwe asd zcc\n                qwe asd zcx ads qwe asd zcc\n                qwe asd zcx ads qwe asd zcc\n            ",
                date: '3/3/2017'
            },
            {
                id: 2,
                title: 'Post #2 title',
                body: "Post #2 body\n                qwe asd zcx ads qwe asd zcc\n                qwe asd zcx ads qwe asd zcc\n                qwe asd zcx ads qwe asd zcc\n                qwe asd zcx ads qwe asd zcc\n                qwe asd zcx ads qwe asd zcc\n                qwe asd zcx ads qwe asd zcc\n                qwe asd zcx ads qwe asd zcc\n                qwe asd zcx ads qwe asd zcc\n                qwe asd zcx ads qwe asd zcc\n            ",
                date: '12/3/2017'
            },
            {
                id: 3,
                title: 'Post #3 title',
                body: "Post #3 body\n                qwe asd zcx ads qwe asd zcc\n                qwe asd zcx ads qwe asd zcc\n                qwe asd zcx ads qwe asd zcc\n                qwe asd zcx ads qwe asd zcc\n                qwe asd zcx ads qwe asd zcc\n                qwe asd zcx ads qwe asd zcc\n                qwe asd zcx ads qwe asd zcc\n                qwe asd zcx ads qwe asd zcc\n                qwe asd zcx ads qwe asd zcc\n            ",
                date: '3/1/2017'
            },
            {
                id: 4,
                title: 'Post #4 title',
                body: "Post #4 body\n                qwe asd zcx ads qwe asd zcc\n                qwe asd zcx ads qwe asd zcc\n                qwe asd zcx ads qwe asd zcc\n                qwe asd zcx ads qwe asd zcc\n                qwe asd zcx ads qwe asd zcc\n                qwe asd zcx ads qwe asd zcc\n                qwe asd zcx ads qwe asd zcc\n                qwe asd zcx ads qwe asd zcc\n                qwe asd zcx ads qwe asd zcc\n            ",
                date: '13/11/2017'
            },
            {
                id: 5,
                title: 'Post #5 title',
                body: "Post #5 body\n                qwe asd zcx ads qwe asd zcc\n                qwe asd zcx ads qwe asd zcc\n                qwe asd zcx ads qwe asd zcc\n                qwe asd zcx ads qwe asd zcc\n                qwe asd zcx ads qwe asd zcc\n                qwe asd zcx ads qwe asd zcc\n                qwe asd zcx ads qwe asd zcc\n                qwe asd zcx ads qwe asd zcc\n                qwe asd zcx ads qwe asd zcc\n            ",
                date: '31/11/2017'
            },
            {
                id: 6,
                title: 'Post #6 title',
                body: "Post #6 body\n                qwe asd zcx ads qwe asd zcc\n                qwe asd zcx ads qwe asd zcc\n                qwe asd zcx ads qwe asd zcc\n                qwe asd zcx ads qwe asd zcc\n                qwe asd zcx ads qwe asd zcc\n                qwe asd zcx ads qwe asd zcc\n                qwe asd zcx ads qwe asd zcc\n                qwe asd zcx ads qwe asd zcc\n                qwe asd zcx ads qwe asd zcc\n            ",
                date: '23/11/2017'
            },
        ];
    }
    return PostsListComponent;
}());
PostsListComponent = __decorate([
    core_1.Component({
        selector: 'posts-list',
        template: "<div>\n                    <h2>My posts</h2>\n                    <hr/>\n                    <div class=\"row\">\n                        <div *ngFor=\"let post of posts\">\n                            <post-thumbnail [post]=\"post\"></post-thumbnail>\n                        </div>\n                    </div>\n              </div>\n              "
    })
], PostsListComponent);
exports.PostsListComponent = PostsListComponent;
//# sourceMappingURL=posts-list.component.js.map