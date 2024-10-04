Cypress.Commands.add("productSearchSelect", () => {
  cy.login();
  cy.productSearch();
  cy.get(
    ":nth-child(1) > .as-m-product-tile > .as-m-product-tile__area-secondary > .as-t-box--relative > .as-m-product-tile__info-wrapper > .as-m-product-tile__info > .padding-top-mobile-2 > .as-a-text--content > :nth-child(2)"
  ).click();
});
