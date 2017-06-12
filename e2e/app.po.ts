// Todo: set up e2e test framework for current repo
import { browser, element, by } from 'protractor';

export class Capdash2UiComponentsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('lib-root h1')).getText();
  }
}
