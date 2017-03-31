import { TestWithMapPage } from './app.po';

describe('test-with-map App', () => {
  let page: TestWithMapPage;

  beforeEach(() => {
    page = new TestWithMapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
