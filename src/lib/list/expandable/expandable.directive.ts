import {
  OnInit,
  OnDestroy,
  AfterContentInit, AfterViewInit, ContentChildren, ContentChild, Directive, ElementRef, EventEmitter, HostBinding, HostListener,
  Input, Output,
  QueryList, AfterContentChecked, AfterViewChecked
} from '@angular/core';
import {ExpandableService} from './expandable.service';
import {RouterLinkActive} from '@angular/router';
import {ListItemComponent} from '../list-item/list-item.component';
import {ListGroupActiveService} from './list-group-active.service';


@Directive({
  selector: 'dhs-list[dhsSubList], dhs-list[sub-list]'
})

export class SubListDirective {

  // get isActive() { return this._isActive }
  // set isActive(status: boolean) { this._isActive = status }
  @ContentChildren(ListItemComponent, {descendants: true}) listItems: QueryList<ListItemComponent | RouterLinkActive | any>;
  @ContentChildren(RouterLinkActive, {descendants: true}) routerLinkItems: QueryList<RouterLinkActive>;

  @HostBinding('class.sub-menu') private subList: boolean;
  @Output() private isActive: boolean;

  constructor(
    private listGroupActive: ListGroupActiveService
  ) {
    this.subList = true;
    this.isActive = false;
  }

  // ngAfterContentChecked() {
  //
  //   const activeItem = this.listItems.find(item => {
  //     // console.log(item.linkItem.routerLinkActive, item.linkItem.routerLinkActive.isActive)
  //
  //     return item.linkItem.routerLinkActive.isActive;
  //   });
  //   // this.listGroupActive.emitChange(activeItem);
  //   console.log('SubListDirective', this.routerLinkItems, activeItem);
  //   if (activeItem) {
  //     this.isActive = true;
  //     // this.listGroupActive.emitChange(true);
  //   } else {
  //     this.isActive = false;
  //     // this.listGroupActive.emitChange(false);
  //   }
  //
  // }
}

@Directive({
  selector: 'dhs-list-item[dhsHasSub], dhs-list-item[has-sub]'
})

export class HasSubDirective implements OnInit, OnDestroy, AfterContentInit {
  @ContentChild(SubListDirective) subList: SubListDirective;

  @HostBinding('class.has-sub') private hasSub: boolean;
  @HostBinding('class.expand') isExpanded: boolean;
  @HostBinding('class.active') isActive: boolean;

  public itemName: string;
  private activeGroup$;
  @Input()
  set name(value: string) {
    this.itemName = value;
  }
  constructor(
    private expandable: ExpandableService,
    private listGroupActive: ListGroupActiveService
  ) {
    this.hasSub = true;
    this.isExpanded = false;
    this.isActive = false;
  }

  @HostListener('click')
  onClick(): boolean {
    this.expandable.emitChange(this);
    return false;
  }

  ngOnInit() {
    // console.log('ngOnInit', this.subList.listItems)
    // this.activeGroup$ = this.subList.listItems.changes.subscribe(res => {
    //   console.log(res);
    //   return res
    // });
    // this.activeGroup$ = this.subList.listItems.find(item => {
    //   // console.log(item.linkItem.routerLinkActive, item.linkItem.routerLinkActive.isActive)
    //
    //   return item.linkItem.routerLinkActive.isActive;
    // });
  }

  ngAfterContentInit() {
    // console.log('ngAfterContentInit', this.subList.listItems)
    // this.activeGroup$ = this.subList.listItems.changes.subscribe(res => {
    //   console.log(res);
    //   return res
    // });
    // this.subList.listItems.forEach(item => {
    //   console.log( item.linkItem.routerLinkActive.subscription.next(1));
    //   console.log(item.linkItem.routerLinkActive, item.linkItem.routerLinkActive.isActive)
    //   if (item.linkItem.routerLinkActive.isActive) {
    //     this.isActive = true;
    //     console.log(this.isActive)
    //   }
    //
    //
    // });
  }

  ngOnDestroy() {
    // this.activeGroup$.unsubscribe();
  }

  // ngAfterViewChecked() {
  //   const isActiveGroup = this.subList.listItems.find(item => {
  //     // console.log(item.linkItem.routerLinkActive, item.linkItem.routerLinkActive.isActive)
  //
  //     return item.linkItem.routerLinkActive.isActive;
  //   });
  //   if (isActiveGroup) {
  //     this.isActive = true;
  //   } else {
  //     this.isActive = false;
  //   }
  // }
}



@Directive({
  selector: 'dhs-list[dhsExpandable], dhs-list[expandable]',

})

export class ExpandableDirective implements OnInit, OnDestroy {
  @ContentChildren(HasSubDirective, {descendants: true}) nestedItems: QueryList<HasSubDirective>;

  private expandedList$;

  constructor(
    private expandable: ExpandableService
  ) {}

  ngOnInit() {
    this.expandedList$ = this.expandable.changeEmitted$
      .subscribe(expandedList => {
        this.nestedItems.map(item => {
          if (item.itemName === expandedList.itemName) {
            item.isExpanded = true;
          } else {
            item.isExpanded = false;
          }
        });
        return expandedList;
      });
  }

  ngOnDestroy() {
    this.expandedList$.unsubscribe();
  }
}
