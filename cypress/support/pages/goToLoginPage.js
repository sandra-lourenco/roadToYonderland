Cypress.Commands.add("goToLoginPage", () => {
    cy.get('[class="as-m-popover__content--modal"] #accept-all-cookies').click();
    cy.get("#auth-popup-button").click();
});
