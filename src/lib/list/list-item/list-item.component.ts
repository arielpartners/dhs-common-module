import {
  Component,
  Input,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ElementRef,
  ViewContainerRef,
  AfterViewInit,
  ViewChild,
  AfterViewChecked, ChangeDetectorRef
} from '@angular/core';
import {ActivatedRoute, RouterLinkActive} from '@angular/router';
import {LinkComponent} from '../../link/link.component';
import {Subscription} from 'rxjs/Subscription';

// this component should behave as li tag
@Component({
  selector: 'dhs-list-item',
  template: `
    <ng-container>
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

export class ListItemComponent implements AfterViewInit {

  public isActive: boolean;

  @Input() link: string;
  // @ViewChild(RouterLinkActive) routerLinkActive: RouterLinkActive;
  @ViewChild('linkItem') linkItem: LinkComponent;

  constructor(
    public ref: ElementRef,
    private route: ActivatedRoute
  ) {
    this.isActive = false;
  }

  ngAfterViewInit() {

    console.log('ListItemComponent', this.route, this.route.toString(), this.link)
    // console.log('ListItemComponent', this.linkItem.routerLinkActive.isActive)
    // if(this.linkItem.routerLinkActive.isActive) {
    //   this.isActive = true;
    //   this.ref.nativeElement.classList.add('active')
    // } else {
    //   this.isActive = false;
    //   this.ref.nativeElement.classList.remove('active')
    // }
  }
}
