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

  delete(id: any) {
    return this.httpClient.delete(`${this.endpoint}/${id}`);
  }

  update(id: any, updatedData: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const body = new URLSearchParams();
    body.append("title", updatedData.title);
    body.append("author", updatedData.author);
    body.append("genre", updatedData.genre);
    body.append("numPages", updatedData.numPages);

    return this.httpClient.put(`${this.endpoint}/${id}/update`, body.toString(), { headers });
  }

  updateRead(id: any) {
    return this.httpClient.put(`${this.endpoint}/${id}/readcheck`,{}); // {} indica que no queremos pasar ningun body
  }
}
