import { Injectable } from "@angular/core";
import { Observable } from "rxjs/RX";
import { IPost } from "./post.model";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Subject } from 'rxjs/RX'

@Injectable()
export class PostService {

    constructor(private http: Http){
    }

    getPosts(){
        let subject = new Subject()
        setTimeout(() => {subject.next(POSTS); subject.complete();}, 100)
        return subject
    }

    getPost(id:number){
        return POSTS.find(post => post.id === id)
    }

     savePost(post){
        post.id = 999       
        POSTS.push(post)
    }

    deletePost(id:number){

    }

    // savePost(event): Observable<IPost>{
    //   let headers = new Headers({'Content-Type':'application/json'})
    //   let options = new RequestOptions({headers: headers})
    //   return this.http.post(`/api/events`, JSON.stringify(event), options).map((response: Response) => {
    //     return response.json();
    //   }).catch(this.handleError);
    // }

    private handleError(error: Response){
       return Observable.throw(error.statusText)
    }
}

const POSTS = [
    {
            id: 1,
            title: 'Post #1 title',
            body: `Post #1 body
                qwe asd zcx ads qwe asd zcc
                qwe asd zcx ads qwe asd zcc
                qwe asd zcx ads qwe asd zcc
                qwe asd zcx ads qwe asd zcc
                qwe asd zcx ads qwe asd zcc
                qwe asd zcx ads qwe asd zcc
                qwe asd zcx ads qwe asd zcc
                qwe asd zcx ads qwe asd zcc
                qwe asd zcx ads qwe asd zcc
            `,
            date: '3/3/2017'
    },
    {
            id: 2,
            title: 'Post #2 title',
            body: `Post #2 body
                qwe asd zcx ads qwe asd zcc
                qwe asd zcx ads qwe asd zcc
                qwe asd zcx ads qwe asd zcc
                qwe asd zcx ads qwe asd zcc
                qwe asd zcx ads qwe asd zcc
                qwe asd zcx ads qwe asd zcc
                qwe asd zcx ads qwe asd zcc
                qwe asd zcx ads qwe asd zcc
                qwe asd zcx ads qwe asd zcc
            `,
            date: '12/3/2017'
    },
    {
            id: 3,
            title: 'Post #3 title',
            body: `Post #3 body
                qwe asd zcx ads qwe asd zcc
                qwe asd zcx ads qwe asd zcc
                qwe asd zcx ads qwe asd zcc
                qwe asd zcx ads qwe asd zcc
                qwe asd zcx ads qwe asd zcc
                qwe asd zcx ads qwe asd zcc
                qwe asd zcx ads qwe asd zcc
                qwe asd zcx ads qwe asd zcc
                qwe asd zcx ads qwe asd zcc
            `,
            date: '3/1/2017'
    },
    {
            id: 4,
            title: 'Post #4 title',
            body: `Post #4 body
                qwe asd zcx ads qwe asd zcc
                qwe asd zcx ads qwe asd zcc
                qwe asd zcx ads qwe asd zcc
                qwe asd zcx ads qwe asd zcc
                qwe asd zcx ads qwe asd zcc
                qwe asd zcx ads qwe asd zcc
                qwe asd zcx ads qwe asd zcc
                qwe asd zcx ads qwe asd zcc
                qwe asd zcx ads qwe asd zcc
            `,
            date: '12/11/2017'
    },
    {
            id: 5,
            title: 'Post #5 title',
            body: `Post #5 body
                qwe asd zcx ads qwe asd zcc
                qwe asd zcx ads qwe asd zcc
                qwe asd zcx ads qwe asd zcc
                qwe asd zcx ads qwe asd zcc
                qwe asd zcx ads qwe asd zcc
                qwe asd zcx ads qwe asd zcc
                qwe asd zcx ads qwe asd zcc
                qwe asd zcx ads qwe asd zcc
                qwe asd zcx ads qwe asd zcc
            `,
            date: '12/12/2017'
    },
    {
            id: 6,
            title: 'Post #6 title',
            body: `Post #6 body
                qwe asd zcx ads qwe asd zcc
                qwe asd zcx ads qwe asd zcc
                qwe asd zcx ads qwe asd zcc
                qwe asd zcx ads qwe asd zcc
                qwe asd zcx ads qwe asd zcc
                qwe asd zcx ads qwe asd zcc
                qwe asd zcx ads qwe asd zcc
                qwe asd zcx ads qwe asd zcc
                qwe asd zcx ads qwe asd zcc
            `,
            date: '11/11/2017'
    },

]