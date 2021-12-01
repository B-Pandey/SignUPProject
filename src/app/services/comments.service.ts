import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../model/comments';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  constructor(private http: HttpClient) {}
  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(
      'https://jsonplaceholder.typicode.com/comments?postId=1'
    );
  }
}
