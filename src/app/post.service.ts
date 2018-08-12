import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { catchError, map} from 'rxjs/operators';

import { Post } from './post';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  private postUrl = 'https://bhvt80jzpd.execute-api.us-east-2.amazonaws.com/Stage/MyResource?TableName=posts';

  getPosts (): Observable<Post[]> {
    return this.http.get<Post>(this.postUrl)
    .pipe(
      map(res => <Post[]>res['Items']),
      catchError(this.handleError('getPosts', []))
    );
  }

  addPost (post: Post): Observable<Post> {
    const dataToPost = {
      'Item' : post,
      'TableName' : 'posts'
    };

    return this.http.post<Post>(this.postUrl, JSON.stringify(dataToPost), httpOptions)
    .pipe(
      catchError(this.handleError<Post>('addPost'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

}

