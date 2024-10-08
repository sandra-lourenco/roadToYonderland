/// <reference types="cypress" />
import LoginPage from "../../support/pages/loginPage";

describe("Registered user should be able to login", () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();
    cy.wait(3000);
  });

  it("Navigate to the login page", () => {
    loginPage.acceptCookies();
    loginPage.openLoginPage();
  });

  it("Log in with a registered user credentials", () => {
    loginPage.acceptCookies();
    loginPage.openLoginPage();
    cy.fixture("user").then((user) => {
      loginPage.enterEmail(user.email);
      loginPage.enterPassword(user.password);
    });
    loginPage.submit();
  });

  it("Verify successful login by checking for user dashboard", () => {
    loginPage.acceptCookies();
    loginPage.openLoginPage();
    cy.fixture("user").then((user) => {
      loginPage.enterEmail(user.email);
      loginPage.enterPassword(user.password);
    });
    loginPage.submit();
    loginPage.verifyDashboard();
  });
});
