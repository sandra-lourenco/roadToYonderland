Cypress.Commands.add("productSearch", () => {
  cy.login();
  //search for shirts
  cy.get('[data-qa="searchbox"]').click();
  cy.get('[data-qa="searchbox"]').type("shirts{enter}");
});
