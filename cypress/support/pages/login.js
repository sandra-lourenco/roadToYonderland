Cypress.Commands.add("login", () => {
  cy.get('[class="as-m-popover__content--modal"] #accept-all-cookies').click();
  cy.get("#auth-popup-button").click();
  cy.get("[id='email']").type("sandralourenc@yahoo.com");
  cy.get("[id='Password']").type("QAtest2024");
  cy.get("button[class='as-a-btn as-a-btn--fill']").click();
});
