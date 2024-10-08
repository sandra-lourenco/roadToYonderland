class CartPage {

  selectSize(){
    cy.wait(2000);
    cy.get('[data-qa="size-select-buttons"] > :nth-child(1)').click();
  }

  addToCart() {
    cy.get(".as-a-btn.as-a-btn--fill.as-a-btn--branded-alt.as-a-btn--l").click();
    cy.wait(2000);
  }

  verifyProductAdded() {
    cy.get(".as-m-popover--modal-csr > .as-m-popover__content--modal > .as-m-popover-header > .as-m-popover-header__title").should("contain", "Added");
  }

  goToCart() {
    cy.get("a[class='as-a-btn as-a-btn--branded-alt'] span[class='as-a-btn__text']").click();
    cy.url().should("include", "/basket-overview");
  }

  removeProduct() {
    cy.get("[data-qa='remove_product']").click();
    cy.get('[data-qa="empty_basket_message"]').should("be.visible");
  }
}

export default new CartPage();
