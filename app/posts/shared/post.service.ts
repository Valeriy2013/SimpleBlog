import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs/RX";
import { IPost } from "./post.model";
import { Http, Response, Headers, RequestOptions } from "@angular/http";

@Injectable()
export class PostService {

    constructor(private http: Http){
    }

    getPosts():Observable<IPost[]> {
      return this.http.get(`/api/posts`).map((response: Response) => {
          return <IPost[]>response.json();
      }).catch(this.handleError);
    }

    getPost(id:number):Observable<IPost>{
        return this.http.get(`/api/posts/`+ id).map((response: Response) => {
          return <IPost>response.json();
        }).catch(this.handleError);
    }

    savePost(post): Observable<IPost>{
      let headers = new Headers({'Content-Type':'application/json'})
      let options = new RequestOptions({headers: headers})
      return this.http.post(`/api/posts`, JSON.stringify(post), options).map((response: Response) => {
        return response.json();
      }).catch(this.handleError);
    }
    
    private handleError(error: Response){
       return Observable.throw(error.statusText)
    }
}

const POSTS: IPost[] = [
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
            date: new Date('3/3/2017')
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
            date: new Date('12/3/2017')
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
            date: new Date('3/1/2017')
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
            date: new Date('12/11/2017')
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
            date: new Date('12/12/2017')
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
            date: new Date('11/11/2017')
    },

]