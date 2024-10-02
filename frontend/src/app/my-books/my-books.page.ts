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

  deleteBook(id: any) {
    this.bookService.delete(id).subscribe(response => {
      this.getAllBooks(); //Para que refresque la página
    })
  }

  editBook(book: any) {
    book.isEditing = !book.isEditing; // Alternar el modo de edición para el libro
  }

  updateBook(book: any) {
    this.bookService.update(book.id, book).subscribe(
      () => {
          console.log('Book updated');
          this.getAllBooks(); // Actualizar la lista de libros
      },
      error => {
          console.error('An error occurred while updating the book', error);
      }
    );
  }

  markRead(id: any) {
    this.bookService.updateRead(id).subscribe(response => {
      this.getAllBooks();
      console.log('Book marked as read:', id);
    }, error => {
      console.error('An error occurred while updating read status', error);
    });
  }

}
