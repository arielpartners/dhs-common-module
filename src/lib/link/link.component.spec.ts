import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LinkComponent } from './link.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('LinkComponent', () => {
  let component: LinkComponent;
  let fixture: ComponentFixture<LinkComponent>;

  @Component({
    template: `<div>test</div>`
  })
  class TestComponent {}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule.withRoutes([
        { path: '', component: LinkComponent },
        { path: 'test', component: TestComponent }
      ])],
      declarations: [
        LinkComponent,
        TestComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set path value with provided string', () => {
    component.path = 'test-link';
    expect(component.path).toBe('test-link');
  });

  it('should set href when link is external', () => {
    component.path = 'http://www.google.com/';
    component.ngOnInit();
    fixture.detectChanges();
    const elem = component.ref.nativeElement.firstElementChild;
    expect(elem.href).toBe('http://www.google.com/');
  });

  it('should set onclick to navigateTo when link is internal', () => {
    component.path = 'test';
    component.ngOnInit();
    fixture.detectChanges();
    const elem = component.ref.nativeElement.firstElementChild;
    expect(elem.onclick).toBe(component.navigateTo);
  });

  describe('navigateTo()', () => {
    it('should navigate to provided link', () => {
      const spy = spyOn(component.router, 'navigate');
      component.path = 'test';
      component.navigateTo({preventDefault: () => { return true; }});
      expect(spy).toHaveBeenCalled();
    });
  });
});
