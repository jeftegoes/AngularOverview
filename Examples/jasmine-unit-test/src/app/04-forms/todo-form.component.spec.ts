import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { TodoFormComponent } from './todo-form.component';

describe('TodoFormComponent', () => {
  let component: TodoFormComponent;

  beforeEach(() => {
    component = new TodoFormComponent(new FormBuilder());
  });

  it('should create a form with 2 controls', () => {
    expect(component.formGroup.contains('name')).toBeTruthy();
    expect(component.formGroup.contains('email')).toBe(true);
  });

  it('should make the name control required', () => {
    let control = component.formGroup.get('name');
    control?.setValue('');
    expect(control?.valid).toBe(false);
  });
});
