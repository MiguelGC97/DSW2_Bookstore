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

  create(bookData: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const body = new URLSearchParams();
    body.append("title", bookData.title);
    body.append("author", bookData.author);
    body.append("genre", bookData.genre);
    body.append("numPages", bookData.numPages);

    return this.httpClient.post(this.endpoint, body.toString(), { headers });
  }
}
