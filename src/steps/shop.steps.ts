import { Given, When, Then } from '@cucumber/cucumber';
import { TestWorld } from '../support/world';
Given('I am on the OpenCart home page', async function(this: TestWorld) { await this.home.open(this.baseUrl); });
When('I search for {string}', async function(this: TestWorld, keyword: string) { await this.home.search(keyword); });
Then('the search results should include {string}', async function(this: TestWorld, product: string) { await this.search.expectProduct(product); });
When('I add the {string} product to the cart', async function(this: TestWorld, product: string) { await this.search.addProduct(product); });
Then('the cart notification should confirm the product was added', async function(this: TestWorld) { await this.search.expectAddedMessage(); });
