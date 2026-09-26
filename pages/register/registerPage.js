export class RegisterPage {
  constructor(page) {
    this.page = page;
    this.maleRadio = page.locator('#gender-male');
    this.femaleRadio = page.locator('#gender-female');
    this.firstNameInput = page.locator('#FirstName');
    this.lastNameInput = page.locator('#LastName');
    this.emailInput = page.locator('#Email');
    this.passwordInput = page.locator('#Password');
    this.confirmPasswordInput = page.locator('#ConfirmPassword');
    this.registerButton = page.locator('input[name="register-button"]');
  }

  async goto() {
    await this.page.goto('/register'); 
  }
 async fillRegistrationForm(firstName, lastName, email, password) {
    await this.femaleRadio.check();
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.confirmPasswordInput.fill(password);
    await this.registerButton.click();

  }
  }