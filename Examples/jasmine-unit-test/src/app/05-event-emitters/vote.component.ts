import { EventEmitter } from '@angular/core';

export class VoteComponent {
  totalVotes: any = 0;
  voteChanged = new EventEmitter();

  upVote() {
    this.totalVotes++;
    this.voteChanged.emit(this.totalVotes);
  }
}
