import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../support/page-objects/LoginPage";
import ProductsPage from "../../support/page-objects/ProductsPage";

Given("I am on the login page", () => {
  LoginPage.visit();
});

When("I enter valid username and password", () => {
  cy.fixture("users").then((users) => {
    LoginPage.getUsernameField().type(users.validUser.username);
    LoginPage.getPasswordField().type(users.validUser.password);
  });
});

When("I enter invalid username and password", () => {
  cy.fixture("users").then((users) => {
    LoginPage.getUsernameField().type(users.invalidUser.username);
    LoginPage.getPasswordField().type(users.invalidUser.password);
  });
});

When("I enter locked out user credentials", () => {
  cy.fixture("users").then((users) => {
    LoginPage.getUsernameField().type(users.lockedOutUser.username);
    LoginPage.getPasswordField().type(users.lockedOutUser.password);
  });
});

When("I click the login button", () => {
  LoginPage.getLoginButton().click();
});

When("I click the login button without entering any credentials", () => {
  LoginPage.getLoginButton().click();
});

Then("I should be redirected to the products page", () => {
  ProductsPage.getPageTitle().should("have.text", "Products");
  cy.url().should("include", "/inventory.html");
});

Then("I should see an error message", () => {
  LoginPage.getErrorMessage().should("be.visible");
  LoginPage.getErrorMessage().should(
    "contain.text",
    "Username and password do not match"
  );
});

Then("I should see a locked out error message", () => {
  LoginPage.getErrorMessage().should("be.visible");
  LoginPage.getErrorMessage().should(
    "contain.text",
    "Sorry, this user has been locked out"
  );
});

Then("I should see a required field error message", () => {
  LoginPage.getErrorMessage().should("be.visible");
  LoginPage.getErrorMessage().should("contain.text", "Username is required");
});
