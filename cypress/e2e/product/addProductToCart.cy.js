/// <reference types="cypress" />

describe("Registered user should be able add products to the cart", () => {
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
    //select size
    cy.get('[data-qa="size-select-buttons"] > :nth-child(2)').click();
    //add to cart 
    cy.get(
      ".as-a-btn.as-a-btn--fill.as-a-btn--branded-alt.as-a-btn--l"
    ).click();
    //check if confirmation is visible
    cy.get("//div[normalize-space()='Added to basket']"
    ).should("be.visible")
    //go to basket
    cy.get(
      "a[class='as-a-btn as-a-btn--branded-alt'] span[class='as-a-btn__text']"
    ).click();
    //cy.get(".as-m-popover-overlay").click()
    //cy.get(".dmpg-basket-hover").click()
    cy.wait(3000)
    cy.get(
      "button[class='as-a-btn as-a-btn--link-subtle as-a-btn--s as-m-cart-item__remove-btn'] span[class='as-a-btn__text']"
    ).click()

  });

  it("Verify that the product appears in the cart.", () => {});
});
