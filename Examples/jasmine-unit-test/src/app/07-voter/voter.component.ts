import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css'],
})
export class VoterComponent implements OnInit {
  @Input() othersVote = 0;
  @Input() myVote = 0;

  @Output() vote: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  upVote() {
    if (this.myVote == 1) return;

    this.myVote++;

    this.vote.emit({ myVote: this.myVote });
  }

  downVote() {
    if (this.myVote == -1) return;

    this.myVote--;

    this.vote.emit({ myVote: this.myVote });
  }

  get totalVotes() {
    return this.othersVote + this.myVote;
  }

  ngOnInit(): void {}
}
