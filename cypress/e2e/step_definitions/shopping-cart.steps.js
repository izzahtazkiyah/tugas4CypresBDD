import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../support/page-objects/LoginPage";
import ProductsPage from "../../support/page-objects/ProductsPage";
import CartPage from "../../support/page-objects/CartPage";

let productName, productPrice;

Given("I on to login page", () => {
  LoginPage.visit();
});

When("I enter login for cart", () => {
  cy.fixture("users").then((users) => {
    LoginPage.getUsernameField().type(users.validUser.username);
    LoginPage.getPasswordField().type(users.validUser.password);
  });
});

Then("I redirected to cart", () => {
  ProductsPage.getPageTitle().should("have.text", "Products");
  cy.url().should("include", "/inventory.html");
});

When("I add product {int} to the cart", (productIndex) => {
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

Then("the cart badge should display {int} item(s)", (itemCount) => {
  ProductsPage.getCartBadge().should("have.text", itemCount.toString());
});

Then("the Add to cart button should change to Remove", () => {
  ProductsPage.getAddToCartButton(0).should("have.text", "Remove");
});

When("I remove product {int} from the cart", (productIndex) => {
  ProductsPage.getAddToCartButton(productIndex).click();
});

When("I navigate to the cart page", () => {
  ProductsPage.navigateToCart();
});

Then("I should see the product {int} in the cart", () => {
  CartPage.getCartItems().should("have.length.at.least", 1);
});

Then("the product details should be correct", () => {
  CartPage.getItemName(0).should("have.text", "Sauce Labs Backpack");
});
