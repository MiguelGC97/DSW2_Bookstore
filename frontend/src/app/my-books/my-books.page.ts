import { BookService } from './../services/book.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.page.html',
  styleUrls: ['./my-books.page.scss'],
})
export class MyBooksPage implements OnInit {

  books: any = [];

  constructor(private bookService: BookService,
              private router: Router,
  ) { }

  ngOnInit() {
    this.getAllBooks();
  }

  getAllBooks() {
    this.bookService.getBooks().subscribe(response => {
      this.books = response;
    }, error => {
      console.error('An error ocurred trying to get the books', error);
    });
  }

}
