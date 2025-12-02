import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RouterTestingModule.withRoutes([])],
      schemas: [NO_ERRORS_SCHEMA],
    });

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.debugElement;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ExampleAngularJasmineTests'`, () => {
    expect(app.title).toEqual('ExampleAngularJasmineTests');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'ExampleAngularJasmineTests app is running!'
    );
  });

  it('should have a router outlet', () => {
    let debugElement = fixture.debugElement.query(By.directive(RouterOutlet));

    expect(debugElement).not.toBeNull();
  });
});
