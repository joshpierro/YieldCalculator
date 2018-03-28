import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.className('yc-title')).getText();
  }

  getNetYield(){
    return element(by.className('yc-net-yield')).getText();
  }

  setPurchasePrice(){
    let purchasePrice = element(by.tagName('input'));
    purchasePrice.clear();
    purchasePrice.sendKeys(99999999);
  }
}
