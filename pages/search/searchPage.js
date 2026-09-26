import { expect } from '@playwright/test';

export class SearchPage {

  constructor(page) {

    this.page = page;

    this.searchInput = page.locator('#small-searchterms');

    this.searchButton = page.locator('.search-box-button');

    this.productResult = page.getByRole('link', { name: 'Simple Computer', exact: true });

    this.productImage = page.locator('#main-product-img-75');

  }

  async searchProduct(productName) {

    await this.searchInput.fill(productName);

    await this.searchButton.click();

  }

  async verifyProduct(productName) {

    await expect(this.productResult).toContainText(productName);

  }

  async openProduct() {
  await this.productResult.click();

}

}