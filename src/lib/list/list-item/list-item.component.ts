import {
  Component,
  Input,
  ViewEncapsulation,
  ElementRef,
  Renderer2,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';

// this component should behave as li tag
@Component({
  selector: 'cd-list-item',
  template: `
    <ng-container>
      <a class="text-ellipsis text-black">
        <ng-content></ng-content>
      </a>
    </ng-container>
  `,
  styleUrls: ['./list-item.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class ListItemComponent implements OnInit {
  private _link: string;
  @Input()
  get link () {
    return this._link;
  }
  set link (value: string) {
    this._link = value;
  }
  constructor(
    public ref: ElementRef,
    private renderer: Renderer2,
    public router: Router
  ) {
    this.navigateTo = this.navigateTo.bind(this);
  }

  ngOnInit () {
    this.setLinkAttribute();
  }

  navigateTo (e) {
    e.preventDefault();
    this.router.navigate([this.link]);
  }

  setLinkAttribute () {
    const elem = this.ref.nativeElement.firstElementChild;
    const httpRe = /(http(s?))\:\/\//gi;
    if (httpRe.test(this.link)) {
      elem.href = this.link;
    } else {
      elem.onclick = this.navigateTo;
    }
  }
}
