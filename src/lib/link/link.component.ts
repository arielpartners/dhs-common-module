import {
  Component,
  Input,
  ViewEncapsulation,
  AfterViewInit,
  ViewChild, ElementRef,
  ChangeDetectionStrategy
} from '@angular/core';

import {Router, RouterLinkActive, RouterLinkWithHref} from '@angular/router';
import {WindowRef} from '../utils/window.service';
import {Location} from '@angular/common';

@Component({
  selector: 'dhs-link',
  template: `
    <a [routerLink]="[path]" [routerLinkActive]="activeClass">
      <ng-content></ng-content>
    </a>
  `,
  styleUrls: ['./link.component.less'],
  providers: [WindowRef, Location],
  viewProviders: [RouterLinkWithHref, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})

export class LinkComponent implements AfterViewInit {

  private _path: string;

  // @ViewChild(DirectiveName) allows user to access methods of the selected Directive
  // In this case we want to use methods of RouterLinkWithHref
  @ViewChild(RouterLinkWithHref) routerLink: RouterLinkWithHref;
  @ViewChild(RouterLinkActive) routerLinkActive: RouterLinkActive;

  @Input()
  get path(): string { return this._path; }
  set path(value: string) { this._path = value; }

  @Input('activeClass') public activeClass: string;

  constructor (
    public ref: ElementRef,
    public router: Router,
    private winRef: WindowRef,
    private location: Location,
  ) {
    this.activeClass = '';
  }

  ngAfterViewInit () {
    console.log('LinkComponent', this.routerLinkActive)
    this.setLink();
  }

  onClickRouteLink () {
    this.winRef.nativeWindow.location.href = this.path;
    // this.location.go(this.path)
    return false;
  }

  setLink () {
    // https://github.com/angular/angular/blob/master/packages/router/src/directives/router_link.ts
    // the source code of RouterLinkWithHref has @HostListener('click') to listen onclick event and use onClick method.
    // we can simply overwrite that method when link is external
    const httpRe = /(http(s?))\:\/\//gi;
    if (httpRe.test(this.path)) {
      this.ref.nativeElement.firstElementChild.href = this.path;
      this.routerLink.onClick = this.onClickRouteLink;
    }
  }
}
