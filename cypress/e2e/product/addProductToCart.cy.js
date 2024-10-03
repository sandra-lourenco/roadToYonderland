/// <reference types="cypress" />

describe("Registered user should be able to login", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(3000);
  });

  it("From the search results, select a product.", () => {
    cy.login();
    cy.productSearch();
    cy.get(
      ":nth-child(1) > .as-m-product-tile > .as-m-product-tile__area-secondary > .as-t-box--relative > .as-m-product-tile__info-wrapper > .as-m-product-tile__info > .padding-top-mobile-2 > .as-a-text--content > :nth-child(2)"
    ).click();
  });

  it.only("Add the product to the shopping cart", () => {
    cy.login();
    cy.productSearchSelect();
    cy.get('[data-qa="size-select-buttons"] > :nth-child(2)').click();
    cy.get(
      ".as-a-btn.as-a-btn--fill.as-a-btn--branded-alt.as-a-btn--l"
    ).click();
    cy.get(
      ".as-m-popover--modal-csr > .as-m-popover__content--modal > .as-m-popover-header > .as-m-popover-header__title"
    ).should("be.visible")
    cy.get(".as-m-group > .as-t-box > .as-a-btn > .as-a-btn__text").click();
    //cy.get(".as-m-popover-overlay").click()
    //cy.get(".dmpg-basket-hover").click()
    cy.wait(3000)
    cy.get(
      "button[class='as-a-btn as-a-btn--link-subtle as-a-btn--s as-m-cart-item__remove-btn'] span[class='as-a-btn__text']"
    ).click()

  });

  it("Verify that the product appears in the cart.", () => {});
});
