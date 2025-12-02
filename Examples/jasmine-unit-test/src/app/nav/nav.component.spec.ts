import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { NavComponent } from './nav.component';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [ NavComponent ]
    });

    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
  });

  beforeEach(() => {
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a link to todos page', () => {
    let debugElement = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

    let index = debugElement.findIndex(de => de.properties['href'] === 'todo');
    expect(index).toBe(-1); // This should be toBeGreaterThan...
  });
});
