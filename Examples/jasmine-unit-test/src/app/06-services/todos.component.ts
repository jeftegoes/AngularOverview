import { Component } from '@angular/core';
import { TodosService } from './todos.service';

@Component({
  template: '',
})
export class TodosComponent {
  todos: any[] = [];
  message: string = '';

  constructor(private todosService: TodosService) {}

  ngOnInit() {
    this.todosService.getTodos().subscribe((t) => (this.todos = t));
  }

  add() {
    let newTodo = { title: '' };
    this.todosService.add(newTodo).subscribe(
      (t) => this.todos.push(t),
      (err) => (this.message = err)
    );
  }

  delete(id: number) {
    if (confirm('Are you sure?')) this.todosService.delete(id).subscribe();
  }
}
