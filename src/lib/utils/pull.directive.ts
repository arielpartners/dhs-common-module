import {
  Directive,
  HostBinding, Input,
} from '@angular/core';

@Directive({
  selector: '[dhsPull], [pull]'
})


// example
// <div pull="right">
export class PullDirective {

  @HostBinding('class.pull-right') public isRight: boolean;
  @HostBinding('class.pull-left') public isLeft: boolean;

  @Input()
  set pull(direction: string) {
    switch (direction) {
      case 'right':
        this.isRight = true;
        this.isLeft = false;
        break;
      case 'left':
        this.isRight = false;
        this.isLeft = true;
        break;
    }
  }

  constructor() {
    this.isRight = false;
    this.isLeft = false;
  }
}
