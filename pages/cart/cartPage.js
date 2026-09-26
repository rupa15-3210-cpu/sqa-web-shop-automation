export class CartPage {
  constructor(page) {
    this.page = page;

    this.productItem = page.getByRole('link', {
      name: 'Simple Computer',
      exact: true
    });

    this.quantityInput = page.locator('input[name^="itemquantity"]');

    this.checkoutButton = page.locator('#checkout');
  }

  async verifyProductInCart() {
    const productVisible = await this.productItem.isVisible();
    const quantity = await this.quantityInput.inputValue();

    return productVisible && quantity === '2';
  }

  async clickCheckout() {
  await this.checkoutButton.click();
}
}