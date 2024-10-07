/// <reference types="cypress" />

describe("Registered user should be able add products to the cart", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(3000);
  });

  it("From the search results, select a product.", () => {
    cy.productSearch();
    cy.get(":nth-child(1) > .as-m-product-tile > .as-m-product-tile__area-secondary > .as-t-box--relative > .as-m-product-tile__info-wrapper > .as-m-product-tile__info > .padding-top-mobile-2 > .as-a-text--content > :nth-child(2)").click();
  });

  it("Add the product to the shopping cart", () => {
    cy.productSearchSelect();
    //select size
    cy.wait(2000);
    cy.get('[data-qa="size-select-buttons"] > :nth-child(1)').click();
    //add to cart
    cy.get(".as-a-btn.as-a-btn--fill.as-a-btn--branded-alt.as-a-btn--l").click();
    cy.wait(2000);
    cy.get(".as-m-popover--modal-csr > .as-m-popover__content--modal > .as-m-popover-header > .as-m-popover-header__title").should("contain", "Added");
    //remove product from basket
    cy.get(".as-m-group > .as-t-box > .as-a-btn > .as-a-btn__text").click();
    cy.wait(3000);
    cy.get("[data-qa='remove_product']").click();
  });

  it("Verify that the product appears in the cart.", () => {
    cy.addProductToCart();
    //go to basket
    cy.get("body").type("{enter}");
    cy.get("a[class='as-a-btn as-a-btn--branded-alt'] span[class='as-a-btn__text']").click();
    //confirm cart page
    cy.url().should("include", "/basket-overview");
    cy.wait(3000);
    cy.get('[data-qa="product_quantity_input"]').should("be.visible");
    //remove product from basket
    cy.wait(4000);
    cy.get("[data-qa='remove_product']").click();
    //confirm that cart is empty
    cy.get('[data-qa="empty_basket_message"]').should("be.visible");
  });
});
