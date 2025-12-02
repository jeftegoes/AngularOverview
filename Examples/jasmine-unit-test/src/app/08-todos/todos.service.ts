import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private httpClient: HttpClient) {}

  add(todo: any) {
    return this.httpClient.post('...', todo);
  }

  getTodos() {
    return this.httpClient.get<any>('...');
  }

  getTodosPromise() {
    return this.httpClient.get<any>('...').toPromise();
  }

  delete(id: number) {
    return this.httpClient.delete('...');
  }
}
