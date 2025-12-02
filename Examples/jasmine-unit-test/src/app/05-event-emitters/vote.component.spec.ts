import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let voteComponent: VoteComponent;

  beforeEach(() => {
    voteComponent = new VoteComponent();
  });

  it('should raise voteChange event when upvoted', () => {
    let totalVotes: number = 0;

    voteComponent.voteChanged.subscribe((tv) => (totalVotes = tv));

    voteComponent.upVote();

    // expect(totalVotes).not.toBeNull();
    expect(totalVotes).toBe(1);
  });
  it('', () => {});
});
