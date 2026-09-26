import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login/loginPage.js';
import { ProductPage } from '../pages/product/productPage.js';
import { CartPage } from '../pages/cart/cartPage.js';
test('User can login and add product to cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  await loginPage.goto();

  await loginPage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory.html/);

  await productPage.addBackpackToCart();

  await expect(productPage.cartLink).toHaveText('1');

  await productPage.openCart();

  await expect(page).toHaveURL(/cart.html/);
  const backpackVisible = await cartPage.verifyBackpackInCart();
  expect(backpackVisible).toBe(true);
});