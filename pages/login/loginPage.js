export class LoginPage {
  constructor(page) {
    this.page = page;

    this.usernameInput = page.locator('#Email');
    this.passwordInput = page.locator('#Password');
    this.loginButton = page.locator('input[value="Log in"]');
    this.loginError = page.locator('.message-error');
  }
async goto() {
  await this.page.goto('/login');
}

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}