import {
  Component,
  Input,
  ViewEncapsulation,
  OnInit,
  ElementRef
} from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'dhs-link',
  template: `
    <a class="text-ellipsis text-black">
      <ng-content></ng-content>
    </a>
  `,
  styleUrls: ['./link.component.less'],
  encapsulation: ViewEncapsulation.None
})

export class LinkComponent implements OnInit {
  private _path: string;

  @Input()
  get path(): string { return this._path; }
  set path(value: string) { this._path = value; }

  constructor (
    public ref: ElementRef,
    public router: Router
  ) {
    this.navigateTo = this.navigateTo.bind(this);
  }

  ngOnInit () {
    this.setLinkAttribute();
  }

  navigateTo (e) {
    e.preventDefault();
    this.router.navigate([this.path]);
  }

  setLinkAttribute () {
    const elem = this.ref.nativeElement.firstElementChild;
    const httpRe = /(http(s?))\:\/\//gi;

    httpRe.test(this.path) ? elem.href = this.path : elem.onclick = this.navigateTo;
  }
}
