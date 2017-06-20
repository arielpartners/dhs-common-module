import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {MenuComponent, MenuHeaderComponent} from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuComponent ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('get/set triggerBy', () => {
    it('should set new value to triggerBy', () => {
      component.triggerBy = 'some-id';
      fixture.detectChanges();
      expect(component.triggerBy).toBe('some-id-checkbox');
    });
  });

  describe('set classList(classes: string | object) on input property "className"', () => {
    it('should generate _classList object when value is provided', () => {
      component.classList = 'some-class';
      fixture.detectChanges();
      expect(component._classList['some-class']).toBeTruthy();
    });

    it('should generate _classList object with multiple keys when provided value is string of multiple className', () => {
      component.classList = 'some-class another-class';
      fixture.detectChanges();
      expect(component._classList['some-class']).toBeTruthy();
      expect(component._classList['another-class']).toBeTruthy();
    });

    it('should generate _classList object with multiple keys when provided value is object', () => {
      const expectedClassObj = {
        'some-class': true,
        'another-class': true
      };
      component.classList = expectedClassObj;
      fixture.detectChanges();
      expect(component._classList['some-class']).toBeTruthy();
      expect(component._classList['another-class']).toBeTruthy();
    });
  });
});


describe('MenuHeaderComponent', () => {
  let component: MenuHeaderComponent;
  let fixture: ComponentFixture<MenuHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuHeaderComponent ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
