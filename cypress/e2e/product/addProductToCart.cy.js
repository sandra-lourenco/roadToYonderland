/// <reference types="cypress" />

describe("Registered user should be able to login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("From the search results, select a product.", () => {
    cy.login();
    
  });

    it("Add the product to the shopping cart", () => {
    cy.login();
    
  });

  it("Verify that the product appears in the cart.", () => {
    
    
  });
});
