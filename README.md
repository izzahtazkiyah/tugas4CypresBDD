# Cypress Sauce Demo Test Automation

This project contains automated UI tests for the Sauce Demo website (https://www.saucedemo.com/) using Cypress with Cucumber for BDD implementation.

## Features Tested

- Login
- Shopping Cart
- Checkout

## Test Scenarios

Each feature has multiple test scenarios covering positive and negative cases:

### Login

- Successful login with valid credentials
- Failed login with invalid credentials
- Failed login with locked out user
- Login form validation

### Shopping Cart

- Add a product to the cart
- Add multiple products to the cart
- Remove a product from the cart
- View cart contents

### Checkout

- Complete checkout with valid information
- Failed checkout with empty information
- Cancel checkout process
- View order summary before finishing checkout

## Project Structure

- `cypress/e2e/features/`: Gherkin feature files
- `cypress/e2e/step_definitions/`: Step definitions for Cucumber
- `cypress/support/page-objects/`: Page Object Models
- `cypress/fixtures/`: Test data
- `.github/workflows/`: CI/CD pipeline configuration

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone this repository
2. Run `npm install` to install dependencies

### Running Tests

- Run all tests: `npm test`
- Open Cypress Test Runner: `npm run test:open`
- Run specific feature tests:
  - Login: `npm run test:login`
  - Shopping Cart: `npm run test:cart`
  - Checkout: `npm run test:checkout`

## CI/CD Integration

Tests are automatically run on GitHub Actions:

- On every push to main branch
- On every pull request to main branch
- Daily at midnight UTC
