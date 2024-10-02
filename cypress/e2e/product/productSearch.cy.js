/// <reference types="cypress" />

describe("Registered user should be able to login", () => {
  beforeEach(() => {
    cy.visit("https://www.cotswoldoutdoor.com/");
  });

  it("Inserting the correct data the user should be able to login", () => {
    cy.login();
    
  });
});
