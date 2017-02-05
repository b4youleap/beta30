import { Beta30Page } from './app.po';

describe('beta30 App', function() {
  let page: Beta30Page;

  beforeEach(() => {
    page = new Beta30Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
