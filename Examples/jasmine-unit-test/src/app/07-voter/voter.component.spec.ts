import { TestBed, ComponentFixture } from '@angular/core/testing';
import { VoterComponent } from './voter.component';
import { By } from '@angular/platform-browser';

describe('VoterComponent', () => {
  let voterComponent: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoterComponent],
    });

    fixture = TestBed.createComponent(VoterComponent);
    voterComponent = fixture.componentInstance;
    fixture.debugElement;
  });

  it('should render total votes', () => {
    voterComponent.othersVote = 20;
    voterComponent.myVote = 1;
    fixture.detectChanges();

    let debugElement = fixture.debugElement.query(By.css('.vote-count'));
    let htmlElement: HTMLElement = debugElement.nativeElement;

    expect(htmlElement.innerText).toContain('21');
  });

  it('should highlight the upvote button if I have upvoted', () => {
    voterComponent.myVote = 1;
    fixture.detectChanges();

    let debugElement = fixture.debugElement.query(By.css('.glyphicon-menu-up'));

    expect(debugElement.classes['highlighted']).toBeTruthy();
  });

  it('should increase total votes then I click the upvote button', () => {
    let button = fixture.debugElement.query(By.css('.glyphicon-menu-up'));

    button.triggerEventHandler('click', null);

    expect(voterComponent.totalVotes).toBe(1);
  });
});
