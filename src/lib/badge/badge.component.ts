import {AfterViewInit, Component, ElementRef, HostBinding, Input, Renderer2} from '@angular/core';

@Component({
  selector: 'dhs-badge',
  template: `<ng-content></ng-content>`
})

// example badge
// <dhs-badge status="danger">4</dhs-badge>
// <dhs-badge status="danger" type="label">4</dhs-badge>
// <dhs-badge status="danger" type="square">4</dhs-badge>

export class BadgeComponent implements AfterViewInit {

  @HostBinding('class.label') public isLabel: boolean;
  @HostBinding('class.badge') public isBadge: boolean;
  @HostBinding('class.badge-square') public isSquare: boolean;

  @Input()
  get type() {
    return this.isBadge
      ? 'badge'
      : 'label';
  }
  set type(value: string) {
    switch (value.toLowerCase()) {
      case 'label':
        this.isLabel = true;
        this.isBadge = false;
        this.isSquare = false;
        break;
      case 'square':
        this.isLabel = false;
        this.isBadge = true;
        this.isSquare = true;
        break;
      default:
        this.isLabel = false;
        this.isBadge = true;
        this.isSquare = false;
    }
  }

  private _status: string;


  private _previousStatus: string;


  @Input()
  get status() { return `${this.type}-${this._status}` }
  set status(value: string) {
    const validStatus = ['danger', 'warning', 'success', 'info', 'primary', 'inverse'].includes(value);
    if (validStatus) {
      this._status = value;
    } else {
      this._status = 'default';
    }
  }

  constructor(
    public ref: ElementRef,
    public renderer: Renderer2
  ) {
    this.isLabel = false;
    this.isBadge = true;
    this.isSquare = false;
    this._previousStatus = null;
    this._status = 'default';
  }


  ngAfterViewInit() {
    this.setBadgeClass();
  }

  setBadgeClass() {
    const elem = this.ref.nativeElement;

    if (this._previousStatus !== this.status) {
      this.renderer.removeClass(elem, this._previousStatus);
    }
    this.renderer.addClass(elem, this.status);
    this._previousStatus = this.status;
  }
}
