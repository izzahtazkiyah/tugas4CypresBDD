class CheckoutPage {
  getFirstNameField() {
    return cy.get("#first-name");
  }

  getLastNameField() {
    return cy.get("#last-name");
  }

  getPostalCodeField() {
    return cy.get("#postal-code");
  }

  getContinueButton() {
    return cy.get("#continue");
  }

  getCancelButton() {
    return cy.get("#cancel");
  }

  getErrorMessage() {
    return cy.get('[data-test="error"]');
  }

  getFinishButton() {
    return cy.get("#finish");
  }

  getSuccessMessage() {
    return cy.get(".complete-header");
  }

  fillInformation(firstName, lastName, postalCode) {
    this.getFirstNameField().type(firstName);
    this.getLastNameField().type(lastName);
    this.getPostalCodeField().type(postalCode);
    return this;
  }

  continue() {
    this.getContinueButton().click();
    return this;
  }

  cancel() {
    this.getCancelButton().click();
    return this;
  }

  finish() {
    this.getFinishButton().click();
    return this;
  }
}

export default new CheckoutPage();
