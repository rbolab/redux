import { QuickPage } from './app.po';

describe('quick App', () => {
  let page: QuickPage;

  beforeEach(() => {
    page = new QuickPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
