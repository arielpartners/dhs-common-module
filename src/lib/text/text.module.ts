import {NgModule} from '@angular/core';
import {TextInverseDirective} from './text.directive';
@NgModule({
  declarations: [
    TextInverseDirective
  ],
  exports: [
    TextInverseDirective
  ]
})
export class TextModule {}
