import { HttpClient } from '@angular/common/http';

export class TodosService {
  constructor(private httpClient: HttpClient) {}

  getTodos() {
    return this.httpClient.get<any>('...');
  }

  add(todo: any) {
    return this.httpClient.post('...', todo);
  }

  delete(id: number) {
    return this.httpClient.delete('...');
  }
}
