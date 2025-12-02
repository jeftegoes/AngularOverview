import { Component, OnInit } from '@angular/core';
import { TodosService } from './todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: any[] = [];
  message: string = '';

  constructor(private todosService: TodosService) {}

  ngOnInit() {
    // this.todosService.getTodos().subscribe((t) => (this.todos = t));
    this.todosService.getTodosPromise().then((t) => (this.todos = t));
  }

  add() {
    var newTodo = { title: '... ' };
    this.todosService.add(newTodo).subscribe(
      (t) => this.todos.push(t),
      (err) => (this.message = err)
    );
  }

  delete(id: number) {
    if (confirm('Are you sure?')) this.todosService.delete(id).subscribe();
  }
}
