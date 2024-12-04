import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomObservableComponent } from './custom-observable/custom-observable.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'customObservable', component: CustomObservableComponent },
  { path: 'user/:id', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
