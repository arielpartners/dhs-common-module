import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LinkComponent } from './link.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [LinkComponent],
  imports: [CommonModule, RouterModule, BrowserModule],
  exports: [LinkComponent]
})

export class LinkModule {}
