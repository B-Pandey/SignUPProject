import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(
      'https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8'
    );
  }
}
