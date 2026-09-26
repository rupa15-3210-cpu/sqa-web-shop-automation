import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/register/registerPage.js';
import { LoginPage } from '../pages/login/loginPage.js';
import { ProductPage } from '../pages/product/productPage.js';
import { CartPage } from '../pages/cart/cartPage.js';
test('Register new customer', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);
    await registerPage.goto();
    await registerPage.fillRegistrationForm('Rupa', 'Khatun', 'rupamonitest20260925@gmail.com', 'Rupa@12345');
    await loginPage.goto();
    await loginPage.login('rupamonitest20260925@gmail.com', 'Rupa@12345');
    await page.goto('/simple-computer');
    await productPage.addBackpackToCart();
    await productPage.openCart();
    const productVisible = await cartPage.verifyProductInCart();
    expect(productVisible).toBe(true);

});
