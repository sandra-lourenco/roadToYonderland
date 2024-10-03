/// <reference types="cypress" />

describe("Registered user should be able to login", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(3000);
  });

  it("Navigate to the login page", () => {
    cy.get(
      '[class="as-m-popover__content--modal"] #accept-all-cookies'
    ).click();
    cy.get("#auth-popup-button").click();
    cy.get(
      "button[id='auth-popup-button'] span[class='as-a-btn__text']"
    ).should("be.visible");
  });

  it("Log in with a registered user credentials", () => {
    cy.goToLoginPage();
    cy.get("[id='email']").type("sandralourenc@yahoo.com");
    cy.get("[id='Password']").type("QAtest2024");
    cy.get("button[class='as-a-btn as-a-btn--fill']").click();
  });

  it("Verify successful login by checking for user dashboard", () => {
    cy.login();
    //My acount button is present
    cy.wait(3000);
    cy.get("button[id='auth-popup-button'] span[class='as-a-btn__text']")
      .should("be.visible")
      .click();
    cy.get(
      "div[class='as-m-popover as-m-popover--bottom-left as-m-popover--medium as-m-popover--animated'] a:nth-child(3) span:nth-child(1)"
    ).click();
    //in my account page verify if user is correct
    cy.url().should("include", "/overview");
    cy.get(".as-m-group > .as-a-heading").should("be.visible");
    cy.get("body").contains("Sandra Lourenço").should("exist");
    cy.get("body").contains("My account details").should("exist");
  });
});
