import {NgModule} from '@angular/core';
import {PullDirective} from './pull.directive';
@NgModule({
  declarations: [
    PullDirective
  ],
  exports: [
    PullDirective
  ]
})
export class UtilityModule {}
