import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightDirective } from './highlight.directive';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  template: `
    <p highlight="cyan">First</p>
    <p highlight>Second</p>
  `,
})
class DirectiveHostComponent {}

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<DirectiveHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DirectiveHostComponent, HighlightDirective],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveHostComponent);
    fixture.detectChanges();
  });

  it('should highlight the first element with cyan', () => {
    let p = HTMLElement = fixture.nativeElement.querySelector('p');

    expect(p.style.backgroundColor).toBe('cyan');
  });

  it('should highlight the second element with default color', () => {
    let des = fixture.debugElement.queryAll(By.directive(HighlightDirective));
    const dir = des[1].injector.get(HighlightDirective) as HighlightDirective;

    const bgColor = des[1].nativeElement.style.backgroundColor;
    
    expect(bgColor).toBe(dir.defaultColor);
  });
});
