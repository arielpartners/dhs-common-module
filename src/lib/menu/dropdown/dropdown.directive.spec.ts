import { TestBed, async, fakeAsync, tick, inject } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { NgReduxTestingModule, MockNgRedux } from '@angular-redux/store/testing';
import { RouterTestingModule } from '@angular/router/testing';

import {CloseToggleDirective, DropdownDirective} from './dropdown.directive';
import { DropdownService } from './dropdown.service';
import { DropdownActions } from './dropdown.actions';
import { MenuModule } from '../menu.module';


fdescribe('DropdownDirective', () => {
  let fixture, directiveEl, directiveInstance, service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestCloseToggleComponent,
        TestDropdownComponent,
      ],
      imports: [
        NgReduxTestingModule,
        RouterTestingModule,
        MenuModule
      ],
      providers: [
        DropdownService,
        DropdownActions,
        MockNgRedux,
      ]
    });
    MockNgRedux.reset();
  });

  describe('CloseToggle', () => {
    beforeEach(() => {
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestCloseToggleComponent);
        directiveEl = fixture.debugElement.query(By.directive(CloseToggleDirective));
        directiveInstance = directiveEl.injector.get(CloseToggleDirective);
      });
    });

    beforeEach(async(
      inject([DropdownService], (menu: DropdownService) => {
        service = menu;
      })
    ));

    it('should exist when element has directive attribute', () => {
      expect(directiveEl).not.toBeNull();
    });

    it('should have called closeToggle function from service', fakeAsync(() => {
      const spy = spyOn(service, 'closeToggle');
      directiveEl.triggerEventHandler('click', null);
      tick();
      fixture.detectChanges();
      expect(spy).toHaveBeenCalled();
    }));
  });

  describe('Dropdown', () => {
    beforeEach(() => {
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestDropdownComponent);
        directiveEl = fixture.debugElement.query(By.directive(DropdownDirective));
        directiveInstance = directiveEl.injector.get(DropdownDirective);
      });
    });

    beforeEach(async(
      inject([DropdownService], (menu: DropdownService) => {
        service = menu;
      })
    ));

    it('should exist when element has directive attribute', () => {
      expect(directiveEl).not.toBeNull();
    });

    it('should have set class "dropdown" to DOM element when directive is applied', () => {
      expect(directiveInstance.isDropdown).toBeTruthy();
      fixture.detectChanges();
      expect(directiveEl.classes.dropdown).toBeTruthy();
    });

    it('should add "dropdown-menu" class to child MenuComponent', () => {
      directiveInstance.ngAfterContentInit();
      fixture.detectChanges();
      expect(directiveInstance.menuComponent._classList['dropdown-test']).toBeTruthy();
      expect(directiveInstance.menuComponent._classList['dropdown-menu']).toBeTruthy();
    });
  });
});


@Component({
  template: '<a close-toggle></a>'
})
class TestCloseToggleComponent {}

@Component({
  template: `
    <div dhs-dropdown>
      <dhs-menu-button id="myDropdownMenu" name="menuName">
        Dropdown Menu
      </dhs-menu-button>
      <dhs-menu triggerBy="myDropdownMenu" className="dropdown-test">
        <dhs-menu-header icon="fa fa-desktop" text="Header"></dhs-menu-header>
        <dhs-menu-item link="/item">Item1</dhs-menu-item>
        <dhs-menu-item link="/item">Item2</dhs-menu-item>
        <dhs-menu-item link="/item">Item3</dhs-menu-item>
        <dhs-menu-item link="/item">Item4</dhs-menu-item>
      </dhs-menu>
    </div>`
})
class TestDropdownComponent {}
