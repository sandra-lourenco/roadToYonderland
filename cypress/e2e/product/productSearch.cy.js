/// <reference types="cypress" />

describe("Registered user should be able to login", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(3000);
  });

  it("Log in as a registered user", () => {
    cy.login();
  });

  it("Search for a product using the search bar", () => {
    cy.login();
    cy.get('[data-qa="searchbox"]').click();
    cy.get('[data-qa="searchbox"]').type("shirts{enter}");
  });

  it("Verify that the search results match the query", () => {
    cy.login();
    //search for shirts
    cy.get('[data-qa="searchbox"]').click();
    cy.get('[data-qa="searchbox"]').type("shirts{enter}");
    //check if result is correct
    cy.get(".as-a-heading.as-a-heading--title").should("be.visible");
    cy.url().should("include", "/shirts");
    cy.get(".as-m-breadcrumb__list > :nth-child(4) > .as-a-text").should.exist;
  });
});
