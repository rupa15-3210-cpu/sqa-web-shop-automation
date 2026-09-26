export class ProductPage {
  constructor(page) {
  this.page = page;

  this.addToCartButton = page.locator('#add-to-cart-button-75');
  this.ram2GB = page.locator('#product_attribute_75_6_32_100');
  this.hdd320GB = page.locator('#product_attribute_75_3_33_102');
  this.processorSlow = page.locator('#product_attribute_75_5_31_96');
  this.cartLink = page.getByRole('link', { name: 'Shopping cart', exact: true });
  this.cartCount = page.locator('.cart-qty');
  this.quantityInput = page.locator('#addtocart_75_EnteredQuantity');
}
async increaseQuantity() {
await this.quantityInput.fill('2');
}
  async addBackpackToCart() {
    await this.processorSlow.check();
    await this.ram2GB.check();
    await this.hdd320GB.check();
    await this.addToCartButton.click();
    await this.page.waitForTimeout(1000);
  }

  async openCart() {
  await this.cartLink.click();
  await this.page.waitForURL('**/cart');
}
}