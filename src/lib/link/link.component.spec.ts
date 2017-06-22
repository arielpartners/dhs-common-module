import { Component } from '@angular/core';
import {async, ComponentFixture, fakeAsync, tick, TestBed} from '@angular/core/testing';
import { LinkComponent } from './link.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterLinkWithHref } from '@angular/router';
import { By } from '@angular/platform-browser';
import { WindowRef } from '../utils/window.service';
import { Location } from '@angular/common';

fdescribe('LinkComponent', () => {
  let component: LinkComponent;
  let fixture: ComponentFixture<LinkComponent>;
  let routeLinkEl, routeLinkInstance, location, winRef;
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
      ],
      providers: [
        {provide: WindowRef, useValue: {
          nativeWindow: {
            location: {
              href: 'http://example.com'
            }
          }
        }}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkComponent);
    component = fixture.componentInstance;
    routeLinkEl = fixture.debugElement.query(By.directive(RouterLinkWithHref));
    routeLinkInstance = routeLinkEl.injector.get(RouterLinkWithHref);
    winRef = fixture.debugElement.injector.get(WindowRef);
    // location = fixture.debugElement.injector.get(Location);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use RouterLinkWithHref on a tag', () => {
    expect(routeLinkEl).not.toBeNull();
    expect(routeLinkEl.name).toBe('a');
  });

  describe('get path() | set path(value: string)', () => {
    it('should set path value with provided string', () => {
      component.path = 'test-link';
      expect(component.path).toBe('test-link');
    });
  });

  describe('ngAfterViewInit()', () => {
    it('should have called setExternalLink() after view initialize', () => {
      const spy = spyOn(component, 'setLink');
      component.ngAfterViewInit();
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('setExternalLink()', () => {

    const condition = 'when provided link includes http or https protocol';
    let onClickRouteLink;

    beforeEach(() => {
      component.path = 'http://www.google.com/';
      onClickRouteLink = routeLinkInstance.onClick;
      component.ngAfterViewInit();
      fixture.detectChanges();
    });

    it(`should overwirte href property ${condition}`, () => {
      const elemHref = component.ref.nativeElement.firstElementChild.href;
      expect(elemHref).toBe(component.path);
    });

    it(`should overwrite onClick() method of RouteLinkWithHref ${condition}`, () => {
      expect(routeLinkInstance.onClick).not.toBe(onClickRouteLink);
      expect(routeLinkInstance.onClick).toBe(component.onClickRouteLink);
    });

  });

  describe('onClickRouteLink', () => {
    it('sdf', fakeAsync(() => {
      // const spy = spyOn(location, 'go');
      console.log(winRef)
      component.path = 'http://www.google.com/';
      component.ngAfterViewInit();
      routeLinkEl.triggerEventHandler('click', null);
      // tick();
      fixture.detectChanges();
      // expect(spy).toHaveBeenCalledWith(component.path);
    }));
  })
});
