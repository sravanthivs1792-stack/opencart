import { BeforeAll, AfterAll, Before, After, Status } from '@cucumber/cucumber';
import { chromium, Browser } from '@playwright/test';
import { TestWorld } from './world';
import { HomePage } from '../pages/HomePage';
import { SearchPage } from '../pages/SearchPage';
import 'dotenv/config';
let browser: Browser;
BeforeAll(async () => { browser = await chromium.launch({ headless: process.env.HEADLESS !== 'false' }); });
Before(async function(this: TestWorld) {
  this.context = await browser.newContext();
  this.page = await this.context.newPage();
  this.home = new HomePage(this.page);
  this.search = new SearchPage(this.page);
});
After(async function(this: TestWorld, scenario) {
  if (scenario.result?.status === Status.FAILED && this.page) {
    const screenshot = await this.page.screenshot({fullPage:true});
    await this.attach(screenshot, 'image/png');
  }
  await this.context?.close();
});
AfterAll(async () => { await browser?.close(); });
