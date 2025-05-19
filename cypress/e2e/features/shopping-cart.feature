Feature: Shopping Cart functionality

  As a logged-in user
  I want to be able to add products to cart and manage them
  So that I can prepare for checkout

Scenario: Successful login and cart operations
  Given I on to login page
  When I enter login for cart
  And I click the login button
  Then I redirected to cart

  When I add product 0 to the cart
  Then the cart badge should display 1 item
  And the Add to cart button should change to Remove
  
  When I add product 1 to the cart
  Then the cart badge should display 2 items

  When I remove product 1 from the cart
  Then the cart badge should display 1 item

  When I navigate to the cart page
  Then I should see the product 0 in the cart
  And the product details should be correct
