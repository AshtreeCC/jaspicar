import { NgAfPwaSeedPage } from './app.po';

describe('ng-af-pwa-seed App', () => {
  let page: NgAfPwaSeedPage;

  beforeEach(() => {
    page = new NgAfPwaSeedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
