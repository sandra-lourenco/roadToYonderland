/// <reference types="cypress" />


describe('Registration in cotswoldoutdoor website', () => {
  beforeEach(() => {
     cy.visit('https://www.cotswoldoutdoor.com/');
  })

  it("user is registered with success", () => {
    
    //click cookie
    cy.get("#accept-all-cookies > .as-a-btn__text").click();
    //check logo
    cy.get(
      '[data-qa="home_logo"] > .m-teaser > .m-teaser__image-placeholder__link'
    ).should.exist;
    //click user icon
    cy.get(
      '.as-t-media-query-wrapper--mobile-block > [data-qa="account"] > .as-a-btn__icon'
    ).click();
    //check popup is visible
    cy.get('.as-m-popover-header__title', { timeout: 10000 }).should(
      "be.visible"
    );

    cy
      .get(".no-gutter > .as-a-text > strong")
      .should("have.text", "Not a member? ").exist;
    
    cy.get('[data-qa="register_link"]')
    .should('have.text', 'Join now')
    .click();

    
  });

})