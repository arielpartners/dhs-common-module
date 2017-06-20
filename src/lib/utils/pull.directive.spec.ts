import { PullDirective } from './pull.directive';
import { Component } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('PullDirective', () => {

  let fixture, component, directiveEl, directiveInstance;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestWrapperComponent,
        PullDirective
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(TestWrapperComponent);
      component = fixture.componentInstance;
      directiveEl = fixture.debugElement.query(By.directive(PullDirective));
      directiveInstance = directiveEl.injector.get(PullDirective);
    });
  }));

  it('should exist when element has directive attribute', () => {
    expect(directiveEl).not.toBeNull();
  });

  it('should add class "pull-left" to host element when provided property value is "left"', () => {
    component.direction = 'left';
    fixture.detectChanges();
    const expectedClass = directiveEl.classes['pull-left'];
    expect(expectedClass).toBeTruthy()
  });

  it('should add class "pull-right" to host element when provided property value is "right"', () => {
    component.direction = 'right';
    fixture.detectChanges();
    const expectedClass = directiveEl.classes['pull-right'];
    expect(expectedClass).toBeTruthy()
  });
});

@Component({
  template: `<div [pull]="direction"></div>`
})
class TestWrapperComponent {
  public direction: string;
  constructor() {
    this.direction = null;
  }
}
