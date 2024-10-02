Cypress.Commands.add("login", () => {
  cy.get("#accept-all-cookies > .as-a-btn__text").click();
  cy.get("button[id='auth-popup-button'] span[class='as-a-btn__text']")
    .click()
  cy.get("#email").type("sandralourenc@yahoo.com");
  cy.get("#Password").type("QAtest2024");
  cy.get("button[class='as-a-btn as-a-btn--fill']").click();
});
