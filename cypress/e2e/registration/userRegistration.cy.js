/// <reference types="cypress" />

describe("Registration in cotswoldoutdoor website", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(3000);
  });

  it("Navigate to the registration page", () => {
    //accept cookies
    cy.get('[class="as-m-popover__content--modal"] #accept-all-cookies').click();

    cy.get("#auth-popup-button").click();
    cy.get('[data-qa="login_popover"]').should("be.visible");
    cy.get(".no-gutter > .as-a-text > strong").should("have.text","Not a member? ");
    cy.get('[data-qa="register_link"]').should("have.text", "Join now").click();

    cy.url().should("include", "/registration-page");
  });

  it("Fill out the registration form with valid data.", () => {
    cy.goToRegistrationPage();

    const email = `bart_test${Math.floor(Math.random() * 1e3)}@gmail.com`;
    // fill form
    cy.get('[placeholder="Email address"]').should("have.attr","placeholder","Email address");
    cy.get("[id='email']").type(email);
    cy.get("body").click();
    cy.get('[class="as-t-box margin-bottom-mobile-2"]').find("button").contains("Ignore").click();

    cy.get('[placeholder="Password"]').should("have.attr","placeholder","Password");
    cy.get("[id='password']").type("Password123!");

    cy.get('[placeholder="Password"]').should("have.attr","placeholder","Password");
    cy.get("[id='passwordConfirmation']").type("Password123!");

    cy.get("select[name='title']").select("Mr");
    cy.get("#field-M").check();
    cy.get("#firstName").type("Bart");
    cy.get("#lastName").type("Simpson");

    cy.get("div[class='as-a-text as-a-text--s']").contains("is completely secure");
  });

  it("Submit the form and verify successful registration", () => {
    cy.fillRegistrationForm();

    cy.get("button[data-qa='create_button']").click();
    cy.url().should("include", "/registration-confirmation");
    cy.contains("WE'RE SO HAPPY YOU'RE HERE.");
    cy.get("[title='Update Account Preferences']").click();
    cy.url().should("include", "/preferences");
    cy.get(".as-m-account-menu > :nth-child(2) > .as-a-btn > .as-a-btn__text").should("exist");
  });
});
