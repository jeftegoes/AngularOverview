/*import { HttpClient, HttpClientModule } from '@angular/common/http';
import { from, of, throwError, empty } from 'rxjs';
import { TodosComponent } from './todos.component';
import { TodosService } from './todos.service';

import { Component, Injector } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

export let InjectorInstance: Injector;

export class AppModule {
  constructor(private injector: Injector) {
    InjectorInstance = this.injector;
  }
}

describe('TodoComponent', () => {
  let todosComponent: TodosComponent;
  let todosService: TodosService;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [TodosComponent],
      providers: [TodosService],
    });

    fixture = TestBed.createComponent(TodosComponent);
    todosComponent = fixture.componentInstance;
  });

  it('should set todos property with the items returned from the server', () => {
    let todos: any[] = [1, 2, 3];

    spyOn(todosService, 'getTodos').and.callFake(() => {
      return of([todos]);
    });

    todosComponent.ngOnInit();

    expect(todosComponent.todos).toBe(todos);
  });

  it('should call the server to sabe the changes when a new todo item is added', () => {
    let spy = spyOn(todosService, 'add').and.callFake((t) => {
      return empty();
    });

    todosComponent.add();

    expect(spy).toHaveBeenCalled();
  });

  it('should add the new todo returned from the server', () => {
    let todo = { id: 1 };
    let spy = spyOn(todosService, 'add').and.returnValue(from([todo]));

    todosComponent.add();

    expect(todosComponent.todos.indexOf(todo)).toBeGreaterThan(-1);
  });

  it('should set the message property if server returns an error when adding a new todo', () => {
    let error = 'error from the server';
    let spy = spyOn(todosService, 'add').and.returnValue(throwError(error));

    todosComponent.add();

    expect(todosComponent.message).toBe(error);
  });

  it('should call the server to delete a todo item if the user confirms', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    let spy = spyOn(todosService, 'delete').and.returnValue(empty());

    todosComponent.delete(1);

    expect(spy).toHaveBeenCalledWith(1);
  });

  it('should NOT call the server to delete a todo item if the user cancels', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    let spy = spyOn(todosService, 'delete').and.returnValue(empty());

    todosComponent.delete(1);

    expect(spy).not.toHaveBeenCalled();
  });
});*/