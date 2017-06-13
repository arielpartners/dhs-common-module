import { Capdash2UiComponentsPage } from './app.po';

describe('capdash2-ui-components App', () => {
  let page: Capdash2UiComponentsPage;

  beforeEach(() => {
    page = new Capdash2UiComponentsPage();
  });

  it('should display message saying lib works', () => {
    page.navigateTo();
    // expect(page.getParagraphText()).toEqual('lib works!');
  });
});
