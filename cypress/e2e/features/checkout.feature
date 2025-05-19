Feature: Checkout functionality

  As a user with items in my cart
  I want to be able to complete the checkout process
  So that I can purchase the products

  Scenario: Complete checkout with valid information
    # login
    Given Login for checkout
    When Enter login for checkout
    And Logining for checkout
    Then Redirected to product page for checkout

    # positive case
    # add to cart
    When I add product 0 to the cart for checkout
    Then the cart badge should display 1 item for checkout
    And the Add to cart button should change to Remove for checkout

    # going to cart
    When I navigate to cart page

    # checkout
    When I click the checkout button
    Then I enter valid customer information
    When I click the continue button
    Then I should see the checkout overview
    When I click the finish button
    Then I should see the checkout complete message

    # back to home
    When I going back to home

    # negative case
    # add to cart
    When I add product 0 to the cart for checkout
    Then the cart badge should display 1 item for checkout
    And the Add to cart button should change to Remove for checkout

    # going to cart
    When I navigate to cart page

    # failed checkout with empty information
    When I click the checkout button
    And I click the continue button without entering any information
    Then I should see a checkout error message

    # back to home
    When I click the cancel button

    # cancel case
    # cancel checkout
    When I click the checkout button
    And I click the cancel button
    Then I should be redirected to the cart page