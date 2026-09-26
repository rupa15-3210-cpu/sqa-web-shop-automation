import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login/loginPage.js';

test('Invalid Login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('rupatest123@gmail.com', 'Rupa@12345');
  await expect(loginPage.loginError).toContainText('Login was unsuccessful');
  await expect(loginPage.loginError).toContainText('No customer account found');
  await expect(page).toHaveURL(/login/);
});