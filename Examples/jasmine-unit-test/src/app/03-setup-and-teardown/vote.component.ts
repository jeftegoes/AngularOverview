export class VoteComponent {
  totalVotes: number = 0;

  upVote() {
    this.totalVotes++;
  }

  downVote() {
    this.totalVotes--;
  }
}
