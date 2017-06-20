import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BadgeComponent } from './badge.component';

describe('BadgeComponent', () => {
  let component: BadgeComponent;
  let fixture: ComponentFixture<BadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgeComponent ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('get type()', () => {
    it('should return value "badge" when isBadge is set to true', () => {
      component.isBadge = true;
      expect(component.type).toBe('badge');
    });
    it('should return value "label" when isBadge is set to false', () => {
      component.isBadge = false;
      expect(component.type).toBe('label');
    });
  });

  describe('set type(value: string)', () => {
    it('should set badge type class to badge by default', () => {
      component.type = 'default';
      expect(component.isLabel).toBeFalsy();
      expect(component.isBadge).toBeTruthy();
      expect(component.isSquare).toBeFalsy();
    });

    it('should set value of badge type class to "label" when type property is set to "label"', () => {
      component.type = 'label';
      expect(component.isLabel).toBeTruthy();
      expect(component.isSquare).toBeFalsy();
      expect(component.isBadge).toBeFalsy();
    });

    it('should set value of badge type class badge-square when type property is set to "square"', () => {
      component.type = 'square';
      expect(component.isLabel).toBeFalsy();
      expect(component.isSquare).toBeTruthy();
      expect(component.isBadge).toBeTruthy();
    });
  });

  describe('set status(value: string)', () => {
    it('should set default status class when status property is not provided', () => {
      expect(component.status).toBe('badge-default');
    });

    it('should set default status when provided status property is not valid', () => {
      component.status = 'test-badge';
      expect(component.status).toBe('badge-default');
    });

    it('should set value of status when status property is provided', () => {
      component.status = 'warning';
      expect(component.status).toBe('badge-warning');
    });
  });

  describe('setBadgeClass()', () => {
    // beforeEach(() => {
    //   component.ngAfterViewInit();
    //   fixture.detectChanges();
    // });

    it('should set badge class to "badge-default" by default', () => {
      const badgeStatus = 'badge-default';
      component.ngAfterViewInit();
      fixture.detectChanges();
      expect(component.status).toBe(badgeStatus);
    });

    it('should set badge class to "badge-warning" when status is set to warning.', () => {
      const badgeStatus = 'badge-warning';
      component.status = 'warning';
      component.ngAfterViewInit();
      fixture.detectChanges();
      expect(component.status).toBe(badgeStatus);
    });
  });

});
