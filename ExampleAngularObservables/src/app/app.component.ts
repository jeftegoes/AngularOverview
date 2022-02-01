import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ExampleAngularObservables';
  userActivated: boolean = false;
  private activatedSub: Subscription = new Subscription();

  constructor(private userService: UserService) {}
  
  ngOnInit(): void {
    this.activatedSub = this.userService.activatedEmitter.subscribe(
      (didActivate) => {
        this.userActivated = didActivate;
      }
    );
  }

  ngOnDestroy(): void {
    this.activatedSub.unsubscribe();
  }
}
