import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  books: Book[] = [];

  constructor(private service: BookService) {}

  ngOnInit(): void {
    this.service.getBooks().subscribe((data: Book[]) => (this.books = data));
  }
}
