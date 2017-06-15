import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ListItemComponent } from './list-item.component';

describe('ListItemComponent', () => {
  let component: ListItemComponent;
  let fixture: ComponentFixture<ListItemComponent>;

  @Component({
    template: `<div>test</div>`
  })
  class TestComponent {}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule.withRoutes([
        { path: '', component: ListItemComponent },
        { path: 'test', component: TestComponent }
      ]) ],
      declarations: [
        ListItemComponent,
        TestComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set link value with provided string', () => {
    component.link = 'test-link';
    expect(component.link).toBe('test-link');
  });

  it('should set href when link is external', () => {
    component.link = 'http://www.google.com/';
    component.ngOnInit();
    fixture.detectChanges();
    const elem = component.ref.nativeElement.firstElementChild;
    expect(elem.href).toBe('http://www.google.com/');
  });

  it('should set onclick to navigateTo when link is internal', () => {
    component.link = 'test';
    component.ngOnInit();
    fixture.detectChanges();
    const elem = component.ref.nativeElement.firstElementChild;
    expect(elem.onclick).toBe(component.navigateTo);
  });

  describe('navigateTo()', () => {
    it('should navigate to provided link', () => {
      const spy = spyOn(component.router, 'navigate');
      component.link = 'test';
      component.navigateTo({preventDefault: () => { return true; }});
      expect(spy).toHaveBeenCalled();
    });
  });
});
