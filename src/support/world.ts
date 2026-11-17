import { World, IWorldOptions, setWorldConstructor } from '@cucumber/cucumber';
import { BrowserContext, Page } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SearchPage } from '../pages/SearchPage';
export class TestWorld extends World {
  context!: BrowserContext; page!: Page; home!: HomePage; search!: SearchPage;
  baseUrl = process.env.BASE_URL || 'https://demo.opencart.com';
  constructor(options: IWorldOptions) { super(options); }
}
setWorldConstructor(TestWorld);
