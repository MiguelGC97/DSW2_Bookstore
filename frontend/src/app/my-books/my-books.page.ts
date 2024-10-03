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
  genres: string[] = ['Fiction', 'Non-Fiction', 'Fantasy', 'Biography', 'Science Fiction'];
  showAddForm: boolean = false;
  showAddButton: boolean = true;

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

  addBook(form: any) {
    if (form.valid) {
      this.bookService.create(form.value).subscribe(() => {
        this.showAddForm = false;
        this.getAllBooks(); // Recargamos la lista de libros
      });
    } else {
      alert('Please fill in all required fields');
    }
  }

  cancelAdd(form?: any) {
    if (form) {
      form.reset(); // Resetea los valores del formulario
    }
    this.showAddForm = false; // Oculta el formulario
  }

  deleteBook(id: any) {
    this.bookService.delete(id).subscribe(response => {
      this.getAllBooks(); //Para que refresque la página
    })
  }

  editBook(book: any) {
    book.isEditing = !book.isEditing; // Alternar el modo de edición para el libro
  }

  cancelEdit(book: any) {
    book.isEditing = false; // Cancelamos el modo edición
    this.getAllBooks(); // Volvemos a cargar los libros para restaurar los valores originales
  }

  saveChanges(book: any) {
    this.bookService.update(book.id, book).subscribe(() => {
      book.isEditing = false; // Guardamos y salimos del modo edición
      this.getAllBooks(); // Volvemos a cargar los libros para actualizar la lista
    });
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
