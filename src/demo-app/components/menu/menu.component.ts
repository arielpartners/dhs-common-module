import { Component } from '@angular/core';

@Component({
  selector: 'demo-menu',
  template: `
    <cd-menu-button id="myMenu" name="menuName">
      Menu1
    </cd-menu-button>
    <cd-menu triggerBy="myMenu">
      <cd-menu-header icon="fa fa-desktop" text="Header"></cd-menu-header>
      <cd-menu-item link="/item1">Item1</cd-menu-item>
      <cd-menu-item link="/item2">Item2</cd-menu-item>
      <cd-menu-item link="/item3">Item3</cd-menu-item>
      <cd-menu-item link="/item4">Item4</cd-menu-item>
    </cd-menu>
  `
})

export class DemoMenuComponent {}
