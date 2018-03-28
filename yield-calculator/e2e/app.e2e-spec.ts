import { AppPage } from './app.po';

describe('yield-calculator App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Yield Calculator app title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('YieldCalculator');
  });

  it('should change the yield when purchase price is changed', () => {
   // page.navigateTo();
    let originalYield = page.getNetYield();
    page.setPurchasePrice();
    expect(page.getNetYield()).not.toEqual(originalYield);
  });
});
