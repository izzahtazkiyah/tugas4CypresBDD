class ProductsPage {
  getPageTitle() {
    return cy.get(".title");
  }

  getProductItems() {
    return cy.get(".inventory_item");
  }

  getProductName(index) {
    return this.getProductItems().eq(index).find(".inventory_item_name");
  }

  getProductPrice(index) {
    return this.getProductItems().eq(index).find(".inventory_item_price");
  }

  getAddToCartButton(index) {
    return this.getProductItems().eq(index).find(".btn_inventory");
  }

  getCartBadge() {
    return cy.get(".shopping_cart_badge");
  }

  getCartIcon() {
    return cy.get(".shopping_cart_link");
  }

  addProductToCart(index) {
    this.getAddToCartButton(index).click();
    return this;
  }

  navigateToCart() {
    this.getCartIcon().click();
    return this;
  }
}

export default new ProductsPage();
