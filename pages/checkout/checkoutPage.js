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

    const shippingMethodStep = this.page.locator(
      '#checkout-step-shipping-method'
    );

    console.log(
      'Shipping Method step count:',
      await shippingMethodStep.count()
    );

    console.log(
      'Shipping Method visible:',
      await shippingMethodStep.isVisible().catch(() => false)
    );

    const shippingMethodButton = this.page.locator(
      '#shipping-method-buttons-container input.shipping-method-next-step-button'
    );

    console.log(
      'Shipping Method Continue count:',
      await shippingMethodButton.count()
    );

    console.log(
      'Shipping Method Continue visible:',
      await shippingMethodButton.isVisible().catch(() => false)
    );

    await shippingMethodButton.click();
  }


  // 4. Payment Method
  async continuePaymentMethod() {

    const paymentMethodStep = this.page.locator(
      '#checkout-step-payment-method'
    );

    console.log(
      'Payment Method step count:',
      await paymentMethodStep.count()
    );

    console.log(
      'Payment Method visible:',
      await paymentMethodStep.isVisible().catch(() => false)
    );

    const paymentMethodButton = this.page.locator(
      '#payment-method-buttons-container input.payment-method-next-step-button'
    );

    console.log(
      'Payment Method Continue count:',
      await paymentMethodButton.count()
    );

    console.log(
      'Payment Method Continue visible:',
      await paymentMethodButton.isVisible().catch(() => false)
    );

    await paymentMethodButton.click();
  }


  // 5. Payment Information
  async continuePaymentInformation() {

    await this.page
      .locator('#paymentmethod_0')
      .check();

    console.log(
      'Cash On Delivery selected'
    );

    const paymentInfoStep = this.page.locator(
      '#checkout-step-payment-info'
    );

    console.log(
      'Payment Info step count:',
      await paymentInfoStep.count()
    );

    console.log(
      'Payment Info visible:',
      await paymentInfoStep.isVisible().catch(() => false)
    );

    const paymentInfoButton = this.page.locator(
      '#payment-info-buttons-container input.payment-info-next-step-button'
    );

    console.log(
      'Payment Info Continue count:',
      await paymentInfoButton.count()
    );

    console.log(
      'Payment Info Continue visible:',
      await paymentInfoButton.isVisible().catch(() => false)
    );

    await paymentInfoButton.click();
  }


  // 6. Confirm Order
  async checkConfirmButton() {

    console.log(
      'Current URL:',
      this.page.url()
    );

    const confirmStep = this.page.locator(
      '#checkout-step-confirm-order'
    );

    console.log(
      'Confirm step count:',
      await confirmStep.count()
    );

    console.log(
      'Confirm step visible:',
      await confirmStep.isVisible().catch(() => false)
    );

    const confirmButton = this.page.locator(
      '#confirm-order-buttons-container input.confirm-order-next-step-button'
    );

    console.log(
      'Confirm button count:',
      await confirmButton.count()
    );

    console.log(
      'Confirm button visible:',
      await confirmButton.isVisible().catch(() => false)
    );
  }


  async confirmOrder() {

    const confirmButton = this.page.locator(
      '#confirm-order-buttons-container input.confirm-order-next-step-button'
    );

    await confirmButton.click();
  }

}