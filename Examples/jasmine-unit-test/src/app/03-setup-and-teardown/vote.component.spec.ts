import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let voteComponent: VoteComponent;

  beforeEach(() => {
    voteComponent = new VoteComponent();
  });

  it('should increment totalVotes when upvoted', () => {
    voteComponent.upVote();
    expect(voteComponent.totalVotes).toBe(1);
  });

  it('should increment totalVotes when downVote', () => {
    voteComponent.downVote();
    expect(voteComponent.totalVotes).toBe(-1);
  });
});
