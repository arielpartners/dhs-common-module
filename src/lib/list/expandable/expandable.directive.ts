import {
  OnInit,
  OnDestroy,
  ContentChildren,
  Directive,
  HostBinding,
  HostListener,
  Input,
  QueryList
} from '@angular/core';
import {ExpandableService} from './expandable.service';


@Directive({
  selector: 'dhs-list[dhsSubList], dhs-list[sub-list]'
})

export class SubListDirective {
  @HostBinding('class.sub-menu') private subList: boolean;

  constructor() {
    this.subList = true;
  }
}

@Directive({
  selector: 'dhs-list-item[dhsHasSub], dhs-list-item[has-sub]'
})

export class HasSubDirective {
  @HostBinding('class.has-sub') private hasSub: boolean;
  @HostBinding('class.expand') isExpanded: boolean;

  public itemName: string;
  @Input()
  set name(value: string) {
    this.itemName = value;
  }
  constructor(
    private expandable: ExpandableService,
  ) {
    this.hasSub = true;
    this.isExpanded = false;
  }

  @HostListener('click')
  onClick(): boolean {
    this.expandable.emitChange(this);
    return false;
  }
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
