import { Page, Locator } from '@playwright/test';
export class HomePage {
  readonly searchInput: Locator;
  constructor(private readonly page: Page) {
    this.searchInput = page.locator('input[name="search"]');
  }
  async open(baseUrl: string) { await this.page.goto(baseUrl); }
  async search(keyword: string) {
    await this.searchInput.fill(keyword);
    await this.page.locator('#search button').click();
  }
}
