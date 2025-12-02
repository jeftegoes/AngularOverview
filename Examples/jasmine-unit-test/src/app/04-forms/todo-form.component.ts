import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  template: '',
})
export class TodoFormComponent implements OnInit {
  formGroup: FormGroup;

  constructor(fb: FormBuilder) {
    this.formGroup = fb.group({
      name: ['', Validators.required],
      email: [''],
    });
  }

  ngOnInit(): void {}
}
