/*
 * ==========
 * WindowRef
 * ==========
 * this service allow us to inject window object to component
 * otherwise window object is unable to test
 */
import { Injectable } from '@angular/core';
function _window() : any {
  // return the global native browser window object
  return window;
}
@Injectable()
export class WindowRef {
  get nativeWindow() : any {
    return _window();
  }
}
