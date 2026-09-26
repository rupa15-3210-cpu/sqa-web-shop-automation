export class CheckoutPage {

  constructor(page) {

    this.page = page;

    this.termsCheckbox = page.locator('#termsofservice');

    this.checkoutButton = page.locator('#checkout');

    this.checkoutAsGuestButton = page.locator(
      'input[value="Checkout as Guest"]'
    );

    // Billing Address
    this.firstNameInput = page.locator('#BillingNewAddress_FirstName');
    this.lastNameInput = page.locator('#BillingNewAddress_LastName');
    this.emailInput = page.locator('#BillingNewAddress_Email');
    this.countrySelect = page.locator('#BillingNewAddress_CountryId');
    this.cityInput = page.locator('#BillingNewAddress_City');
    this.addressInput = page.locator('#BillingNewAddress_Address1');
    this.zipInput = page.locator('#BillingNewAddress_ZipPostalCode');
    this.phoneInput = page.locator('#BillingNewAddress_PhoneNumber');
  }


  async agreeToTerms() {

    await this.termsCheckbox.check();
  }


  async proceedToCheckout() {

    await this.checkoutButton.click();
  }


  async checkoutAsGuest() {

    await this.checkoutAsGuestButton.click();
  }


  async fillBillingAddress() {

    await this.firstNameInput.fill('Rupa');

    await this.lastNameInput.fill('Khatun');

    await this.emailInput.fill(
      'rupamonitest20260925@gmail.com'
    );

    await this.countrySelect.selectOption({
      label: 'Bangladesh'
    });

    await this.cityInput.fill('Jashore');

    await this.addressInput.fill('Benapole');

    await this.zipInput.fill('7431');

    await this.phoneInput.fill('01700000000');
  }


  // 1. Billing Address
  async continueBilling() {

    await this.page
      .locator(
        '#billing-buttons-container input.new-address-next-step-button'
      )
      .click();
  }


  // 2. Shipping Address
  async continueShipping() {

    await this.page
      .locator(
        '#shipping-buttons-container input.new-address-next-step-button'
      )
      .click();
  }


  // 3. Shipping Method
  async continueShippingMethod() {

    const shippingMethodButton = this.page.locator(
      '#shipping-method-buttons-container input.shipping-method-next-step-button'
    );

    await shippingMethodButton.click();
  }


  // 4. Payment Method
  async continuePaymentMethod() {

    const paymentMethodButton = this.page.locator(
      '#payment-method-buttons-container input.payment-method-next-step-button'
    );

    await paymentMethodButton.click();
  }


  // 5. Payment Information
  async continuePaymentInformation() {

    await this.page
      .locator('#paymentmethod_0')
      .check();

    const paymentInfoButton = this.page.locator(
      '#payment-info-buttons-container input.payment-info-next-step-button'
    );

    await paymentInfoButton.click();
  }


  // 6. Confirm Order
  async checkConfirmButton() {

    const confirmStep = this.page.locator(
      '#checkout-step-confirm-order'
    );

    const confirmButton = this.page.locator(
      '#confirm-order-buttons-container input.confirm-order-next-step-button'
    );

    await confirmStep.isVisible();
    await confirmButton.isVisible();
  }


  async confirmOrder() {

    const confirmButton = this.page.locator(
      '#confirm-order-buttons-container input.confirm-order-next-step-button'
    );

    await confirmButton.click();
  }

}