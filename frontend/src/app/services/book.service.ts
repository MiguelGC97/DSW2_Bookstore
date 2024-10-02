import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  endpoint = `http://localhost:8080/api/my-books`

  constructor(private httpClient: HttpClient) { }

  getBooks() {
    return this.httpClient.get(this.endpoint);
  }
}
