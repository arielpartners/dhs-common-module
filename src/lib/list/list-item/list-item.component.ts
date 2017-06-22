import {
  Component,
  Input,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ElementRef,
  Renderer2,
  OnInit, ViewChild, AfterContentInit, AfterViewInit, AfterViewChecked
} from '@angular/core';
import {Router, RouterLinkActive} from '@angular/router';
import {LinkComponent} from '../../link/link.component';

// this component should behave as li tag
@Component({
  selector: 'dhs-list-item',
  template: `
    <ng-container class="test">
      <dhs-link #linkItem [path]="link" activeClass="active">
        <ng-content></ng-content>
      </dhs-link>
    </ng-container>
  `,
  styleUrls: ['./list-item.component.less'],
  viewProviders: [RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})

export class ListItemComponent implements AfterViewChecked {

  @Input() link: string;
  // @ViewChild(RouterLinkActive) routerLinkActive: RouterLinkActive;
  @ViewChild('linkItem') linkItem: LinkComponent;

  constructor(public ref: ElementRef) {

  }

  classList() {
    this.ref.nativeElement.classList.add('active')
    console.log(this.ref, this.ref.nativeElement.classList)
  }
  ngAfterViewChecked() {
    // console.log('ListItemComponent', this.linkItem.routerLinkActive.isActive)
    if(this.linkItem.routerLinkActive.isActive) {
      this.classList();
    }
  }
}
