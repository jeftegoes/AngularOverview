import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription = new Subscription;

  constructor() {}

  ngOnInit(): void {
    // this.firstObsSubscription = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }
}
