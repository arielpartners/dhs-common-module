import { Directive, HostListener } from '@angular/core';
import { DropdownService } from './dropdown.service';

@Directive({
  selector: '[cdCloseToggle], [cd-close-toggle], [closeToggle], [close-toggle]'
})

export class CloseToggleDirective {
  constructor(
    public service: DropdownService
  ) {}

  @HostListener('click') onClick() {
    this.service.closeToggle();
  }
}


