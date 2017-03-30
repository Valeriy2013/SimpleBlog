"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var PostThumbnailComponent = (function () {
    function PostThumbnailComponent() {
    }
    return PostThumbnailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], PostThumbnailComponent.prototype, "post", void 0);
PostThumbnailComponent = __decorate([
    core_1.Component({
        selector: 'post-thumbnail',
        template: "\n    <div class=\"well hoverwell thumbnail\">\n        <h3>{{post?.title}}</h3>\n        <div>{{post?.body}}</div>\n        <div>Date: {{post?.date}}</div>\n    </div>\n    ",
        styles: ["\n        .thumbnail { min-height: 210px; }\n        .well div { color: #bbb; }\n    "]
    })
], PostThumbnailComponent);
exports.PostThumbnailComponent = PostThumbnailComponent;
//# sourceMappingURL=post-thumbnail.component.js.map