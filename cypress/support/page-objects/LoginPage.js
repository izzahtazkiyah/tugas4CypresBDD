class LoginPage {
  visit() {
    cy.visit("/");
    return this;
  }

  getUsernameField() {
    return cy.get("#user-name");
  }

  getPasswordField() {
    return cy.get("#password");
  }

  getLoginButton() {
    return cy.get("#login-button");
  }

  getErrorMessage() {
    return cy.get('[data-test="error"]');
  }

  login(username, password) {
    this.getUsernameField().type(username);
    this.getPasswordField().type(password);
    this.getLoginButton().click();
    return this;
  }
}

export default new LoginPage();
