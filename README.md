
# End-to-End Testing Exercise

This repository contains automated end-to-end (E2E) tests for various user flows such as login, product search, adding a product to the cart, and user registration using Cypress for https://www.cotswoldoutdoor.com/

## Project Structure

```plaintext
cypress/
│
├── e2e/
│   ├── login/
│   │   └── userLogin.cy.js         # User login test
│   ├── product/
│   │   ├── addProductToCart.cy.js  # Add product to cart test
│   │   └── productSearch.cy.js     # Product search test
│   └── registration/
│       └── userRegistration.cy.js  # New user registration test
├── images  /                       # Contains images
├── plugins/                        # Cypress plugin configurations
├── report/                         # Contains test reports
├── screenshots/                    # Test failure screenshots
├── support/                        # Additional support for tests (custom commands)
│   ├── pages/
│   │   ├── addProductToCart.js     # Page object for adding product to cart
│   │   ├── fillRegistrationForm.js # Page object for filling the registration form
│   │   ├── goToLoginPage.js        # Page object for navigating to the login page
│   │   ├── goToRegistrationPage.js # Page object for navigating to the registration page
│   │   ├── login.js                # Page object for login actions
│   │   ├── productSearch.js        # Page object for searching products
│   │   ├── productSearchSelect.js  # Page object for selecting a product after search
│   │   ├── commands.js             # Custom Cypress commands
│   │   └── e2e.js                  # End-to-end test initialization
├── node_modules/                   # Node.js dependencies
├── .gitignore                      # Git ignore file
├── cypress.config.js               # Cypress configuration file
├── package.json                    # NPM package file
├── package-lock.json               # NPM lock file
└── README.md                       # Project readme file
```

## Running Tests Locally

### Pre-requisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/en/) (v12 or higher)
- [Cypress](https://www.cypress.io/)

### Install Dependencies

To install the dependencies, run:

```bash
npm install
```

### Running Cypress Tests

To run the tests locally, use one of the following commands:

#### 1. Open Cypress Test Runner (interactive mode):

This command will open the Cypress GUI, where you can interactively run the tests.

```bash
npx cypress open
```

#### 2. Run Tests in Headless Mode:

This will run all the tests in the terminal without opening the GUI (headless mode).

```bash
npx cypress run
```

You can specify individual test files by adding the `--spec` option:

```bash
npx cypress run --spec "cypress/e2e/login/userLogin.cy.js"
```

## Running Tests in GitHub Actions

This repository includes a CI configuration to run the Cypress tests in GitHub Actions. The configuration file is located at:

```plaintext
.github/workflows/test.yml
```

## Viewing Test Results

### Test Reports

- Test results (including screenshots and videos of failures) will be saved in the `cypress/screenshots/` and `cypress/videos/` directories.

### GitHub Actions Reports

In the GitHub Actions tab of the repository, you can view the results of the tests directly from the CI pipeline.

Example:

![GitHub Actions Report](cypress/images/gitHubActionsReport.png)


