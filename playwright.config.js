import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: [
  ['html', { outputFolder: 'playwright-report', open: 'never' }],
  ['allure-playwright', { outputFolder: 'allure-results' }],
],

  use: {
    baseURL: 'https://demowebshop.tricentis.com/',
    headless: false,
    screenshot: 'on',
    video: 'on',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});