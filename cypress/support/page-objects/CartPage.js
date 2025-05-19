class CartPage {
  getPageTitle() {
    return cy.get(".title");
  }

  getCartItems() {
    return cy.get(".cart_item");
  }

  getItemName(index) {
    return this.getCartItems().eq(index).find(".inventory_item_name");
  }

  getItemPrice(index) {
    return this.getCartItems().eq(index).find(".inventory_item_price");
  }

  getRemoveButton(index) {
    return this.getCartItems().eq(index).find(".cart_button");
  }

  getContinueShoppingButton() {
    return cy.get("#continue-shopping");
  }

  getCheckoutButton() {
    return cy.get("#checkout");
  }

  removeItem(index) {
    this.getRemoveButton(index).click();
    return this;
  }

  proceedToCheckout() {
    this.getCheckoutButton().click();
    return this;
  }

  continueShopping() {
    this.getContinueShoppingButton().click();
    return this;
  }
}

export default new CartPage();
