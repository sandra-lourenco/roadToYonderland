/// <reference types="cypress" />

describe("Registered user should be able to login", () => {
  beforeEach(() => {
    cy.visit("https://www.cotswoldoutdoor.com/");
  });

  it("Log in as a registered user", () => {
    cy.login();
    
  });


it("Search for a product using the search bar", () => {
    
    
  });

it("Verify that the search results match the query", () => {
    
    
  });
});



