/// <reference types="cypress" />
import RegistrationPage from "../../support/pages/registrationPage";

describe("Registration in cotswoldoutdoor website", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(3000);
  });

  it("Navigate to the registration page", () => {
    RegistrationPage.navigateToRegistration();
  });

  it("Fill out the registration form with valid data.", () => {
    const email = `bart_test${Math.floor(Math.random() * 1e3)}@gmail.com`;
    const password = "Password123!";
    const firstName = "Bart";
    const lastName = "Simpson";

    RegistrationPage.navigateToRegistration();
    RegistrationPage.fillForm(email, password, firstName, lastName);
  });

  it("Submit the form and verify successful registration", () => {
    const email = `bart_test${Math.floor(Math.random() * 1e3)}@gmail.com`;
    const password = "Password123!";
    const firstName = "Bart";
    const lastName = "Simpson";

    RegistrationPage.navigateToRegistration();
    RegistrationPage.fillForm(email, password, firstName, lastName);
    RegistrationPage.submitForm();
    RegistrationPage.verifyRegistrationSuccess();
  });
});
