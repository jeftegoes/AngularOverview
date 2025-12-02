import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TodoFormComponent } from './04-forms/todo-form.component';

import { AppComponent } from './app.component';
import { VoterComponent } from './07-voter/voter.component';
import { TodosComponent } from './08-todos/todos.component';
import { UserDetailsComponent } from './09-user-details/user-details.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    VoterComponent,
    TodosComponent,
    UserDetailsComponent,
    HomeComponent,
    UsersComponent,
    NavComponent,
    HighlightDirective,
  ],
  imports: [RouterModule.forRoot(routes), BrowserModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
