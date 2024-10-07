Cypress.Commands.add("addProductToCart", () => {
  cy.productSearchSelect();
  cy.wait(2000);
  cy.get('[data-qa="size-select-buttons"] > :nth-child(1)').click();
  cy.wait(2000);
  //add to cart
  cy.get(".as-a-btn.as-a-btn--fill.as-a-btn--branded-alt.as-a-btn--l").click();
  cy.wait(2000);
});
