class ProductPage {
  searchProduct(productName) {
    cy.get('[data-qa="searchbox"]').click();
    cy.get('[data-qa="searchbox"]').type(`${productName}{enter}`);
  }

  selectFirstProduct() {
    cy.get(
      ":nth-child(1) > .as-m-product-tile > .as-m-product-tile__area-secondary > .as-t-box--relative > .as-m-product-tile__info-wrapper > .as-m-product-tile__info > .padding-top-mobile-2 > .as-a-text--content > :nth-child(2)"
    ).click();
  }

  validateSearch(){
   cy.get(".as-a-heading.as-a-heading--title").should("be.visible");
   cy.url().should("include", "/shirts");
   cy.get(".as-m-breadcrumb__list > :nth-child(4) > .as-a-text").should.exist;
  }
}

export default new ProductPage();
