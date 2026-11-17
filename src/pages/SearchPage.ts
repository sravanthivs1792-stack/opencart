import { Page, expect } from '@playwright/test';
export class SearchPage {
  constructor(private readonly page: Page) {}
  async expectProduct(name: string) {
    await expect(this.page.locator('.product-thumb').filter({hasText: name}).first()).toBeVisible();
  }
  async addProduct(name: string) {
    const product = this.page.locator('.product-thumb').filter({hasText: name}).first();
    await expect(product).toBeVisible();
    await product.locator('button[title="Add to Cart"], button:has(.fa-shopping-cart)').first().click();
  }
  async expectAddedMessage() {
    await expect(this.page.locator('#alert, .alert-success').first()).toContainText(/success|added/i);
  }
}
