Cypress.Commands.add("goToRegistrationPage", () => {
  cy.get('[class="as-m-popover__content--modal"] #accept-all-cookies').click();
  cy.get("#auth-popup-button").click();
  cy.get('[data-qa="register_link"]').click();
});
