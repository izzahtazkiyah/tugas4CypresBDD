import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../support/page-objects/LoginPage";
import ProductsPage from "../../support/page-objects/ProductsPage";
import CartPage from "../../support/page-objects/CartPage";
import CheckoutPage from "../../support/page-objects/CheckoutPage";

//Scenario : Complete checkout with valid information
//login
Given("Login for checkout", () => {
  LoginPage.visit();
});

When("Enter login for checkout", () => {
  cy.fixture("users").then((users) => {
    LoginPage.getUsernameField().type(users.validUser.username);
    LoginPage.getPasswordField().type(users.validUser.password);
  });
});

When("Logining for checkout", () => {
  LoginPage.getLoginButton().click();
});

Then("Redirected to product page for checkout", () => {
  ProductsPage.getPageTitle().should("have.text", "Products");
  cy.url().should("include", "/inventory.html");
});

//add product to cart
When("I add product {int} to the cart for checkout", (productIndex) => {
  ProductsPage.getProductName(productIndex)
    .invoke("text")
    .then((text) => {
      productName = text;
    });
  ProductsPage.getProductPrice(productIndex)
    .invoke("text")
    .then((text) => {
      productPrice = text;
    });
  ProductsPage.addProductToCart(productIndex);
});

Then(
  "the cart badge should display {int} item(s) for checkout",
  (itemCount) => {
    ProductsPage.getCartBadge().should("have.text", itemCount.toString());
  }
);

Then("the Add to cart button should change to Remove for checkout", () => {
  ProductsPage.getAddToCartButton(0).should("have.text", "Remove");
});

When("I navigate to cart page", () => {
  ProductsPage.navigateToCart();
});

When("I click the checkout button", () => {
  CartPage.proceedToCheckout();
});

Then("I enter valid customer information", () => {
  cy.fixture("users").then((users) => {
    CheckoutPage.fillInformation(
      users.customerInfo.firstName,
      users.customerInfo.lastName,
      users.customerInfo.postalCode
    );
  });
});

When("I click the continue button", () => {
  CheckoutPage.continue();
});

Then("I should see the checkout overview", () => {
  cy.get(".title").should("have.text", "Checkout: Overview");
});

When("I click the finish button", () => {
  CheckoutPage.finish();
});

Then("I should see the checkout complete message", () => {
  cy.get(".title").should("have.text", "Checkout: Complete!");
});

When("I going back to home", () => {
  cy.get("#back-to-products").should("be.visible").click();
});

When("I click the continue button without entering any information", () => {
  CheckoutPage.continue();
});

Then("I should see a checkout error message", () => {
  CheckoutPage.getErrorMessage().should("be.visible");
  CheckoutPage.getErrorMessage().should("contain.text", "Error:");
});

When("I click the cancel button", () => {
  CheckoutPage.cancel();
});

Then("I should be redirected to the cart page", () => {
  CartPage.getPageTitle().should("have.text", "Your Cart");
});
