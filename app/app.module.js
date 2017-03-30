"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var blog_app_component_1 = require("./blog-app.component");
var navbar_component_1 = require("./nav/navbar.component");
var posts_list_component_1 = require("./posts/posts-list.component");
var post_thumbnail_component_1 = require("./posts/post-thumbnail.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        declarations: [
            blog_app_component_1.BlogAppComponent,
            navbar_component_1.NavBarComponent,
            posts_list_component_1.PostsListComponent,
            post_thumbnail_component_1.PostThumbnailComponent
        ],
        bootstrap: [blog_app_component_1.BlogAppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map