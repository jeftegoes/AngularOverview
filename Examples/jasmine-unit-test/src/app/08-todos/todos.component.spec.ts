import { HttpClientModule } from '@angular/common/http';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { TodosComponent } from './todos.component';
import { TodosService } from './todos.service';

describe('TodoComponent', () => {
  let todoComponent: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [TodosComponent],
      providers: [TodosService],
    });

    fixture = TestBed.createComponent(TodosComponent);
    todoComponent = fixture.componentInstance;
  });

  it('should create', () => {
    expect(todoComponent).toBeTruthy();
  });

  it('should load todos from the server', fakeAsync(() => {
    let service = TestBed.inject(TodosService);
    spyOn(service, 'getTodosPromise').and.returnValue(
      Promise.resolve([1, 2, 3])
    );

    fixture.detectChanges();

    tick();
    
    expect(todoComponent.todos.length).toBe(3);
  }));
});
