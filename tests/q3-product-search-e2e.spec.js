import { test } from '@playwright/test';

import { ProductPage } from '../pages/product/productPage.js';
import { SearchPage } from '../pages/search/searchPage.js';
import { CartPage } from '../pages/cart/cartPage.js';
import { CheckoutPage } from '../pages/checkout/checkoutPage.js';

test('Product Search E2E', async ({ page }) => {

  const searchPage = new SearchPage(page);

  await page.goto('/');

  // Search Product
  await searchPage.searchProduct('Simple Computer');

  // Verify Product
  await searchPage.verifyProduct('Simple Computer');

  // Open Product
  await searchPage.openProduct();

  const productPage = new ProductPage(page);

  // Increase Quantity
  await productPage.increaseQuantity();

  // Add Product to Cart
  await productPage.addBackpackToCart();

  // Open Cart
  await productPage.openCart();

  const cartPage = new CartPage(page);

  const checkoutPage = new CheckoutPage(page);

  // Agree Terms
  await checkoutPage.agreeToTerms();

  // Checkout
  await cartPage.clickCheckout();

  await page.waitForTimeout(2000);

  // Checkout as Guest
  await checkoutPage.checkoutAsGuest();

  // Billing Address
  await checkoutPage.fillBillingAddress();

  // 1. Billing Address → Shipping Address
  await checkoutPage.continueBilling();

  // 2. Shipping Address → Shipping Method
  await checkoutPage.continueShipping();

  // 3. Shipping Method → Payment Method
  await checkoutPage.continueShippingMethod();

  // 4. Payment Method → Payment Information
  await checkoutPage.continuePaymentMethod();

  // 5. Payment Information → Confirm Order
  await checkoutPage.continuePaymentInformation();

  await page.waitForTimeout(2000);

  // Check Confirm Button
  await checkoutPage.checkConfirmButton();

  // Confirm Order
  await checkoutPage.confirmOrder();

});