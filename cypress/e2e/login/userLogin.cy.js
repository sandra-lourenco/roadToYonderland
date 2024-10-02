/// <reference types="cypress" />

describe("Registered user should be able to login", () => {
  beforeEach(() => {
    cy.visit("https://www.cotswoldoutdoor.com/");
  });

  it("Inserting the correct data the user should be able to login", () => {
   cy.login()
   cy.get("button[id='auth-popup-button'] span[class='as-a-btn__text']").should("be.visible");


  })
})
