import { KsiegarniaPage } from './app.po';

describe('ksiegarnia App', function() {
  let page: KsiegarniaPage;

  beforeEach(() => {
    page = new KsiegarniaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
