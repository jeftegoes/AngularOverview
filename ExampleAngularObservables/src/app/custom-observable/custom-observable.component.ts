import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators'

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
})
export class CustomObservableComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription = new Subscription();

  constructor() {}

  ngOnInit(): void {
    const customIntervalObservable = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        
        if (count === 2) {
          observer.complete();
        }

        if (count > 3) {
          observer.error(new Error('Count is greater 3!'));
        }

        count++;
      }, 1000);
    });

    this.firstObsSubscription = customIntervalObservable.pipe(filter(data => {
      return data as number > 0;
    }), map((data: any) => {
      return 'Round: ' + (data + 1);
    })).subscribe((data) => {
      console.log(data);
    }, error => {
      console.log(error);
      alert(error);
    }, () => {
      console.log('Completed!');
    });
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }
}
