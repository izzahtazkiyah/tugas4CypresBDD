Feature: Login functionality

  As a user of Sauce Demo website
  I want to be able to login with valid credentials
  So that I can access the products page

  Scenario: Successful login with valid credentials
    Given I am on the login page
    When I enter valid username and password
    And I click the login button
    Then I should be redirected to the products page

  Scenario: Failed login with invalid credentials
    Given I am on the login page
    When I enter invalid username and password
    And I click the login button
    Then I should see an error message

  Scenario: Failed login with locked out user
    Given I am on the login page
    When I enter locked out user credentials
    And I click the login button
    Then I should see a locked out error message

  Scenario: Login form validation
    Given I am on the login page
    When I click the login button without entering any credentials
    Then I should see a required field error message