/// <reference types="cypress" />


describe('Registration in cotswoldoutdoor website', () => {
  beforeEach(() => {
     cy.visit("/");
  })

  it("should be able to go to Account Registration page", () => {
    
    //click cookie
    cy.get("#accept-all-cookies > .as-a-btn__text").click();
    //check logo
    cy.get(
      '[data-qa="home_logo"] > .m-teaser > .m-teaser__image-placeholder__link'
    ).should.exist;
    //click login
    cy.get("button[id='auth-popup-button'] span[class='as-a-btn__text']").click(
      { force: true }
    );;
    //check popup is visible
    cy.wait(1000);
    cy.get(".as-m-popover-header__title").should(
      "be.visible"
    );

    cy
      .get(".no-gutter > .as-a-text > strong")
      .should("have.text", "Not a member? ").exist;
    
    cy.get('[data-qa="register_link"]')
      .should("have.text", "Join now")
      .click({ force: true });

    cy.get(".as-a-heading").should("have.text", "Account Registration");
    it('Should display error messages when mandatory fields are not filled', () => {
    
    cy.get('button[type="submit"]').click();
    //error messages
    cy.get(".as-a-text.as-a-text--negative.as-a-text--none").should(
      "contain",
      "Email address is required"
    );
    cy.get("//div[contains(@class,'main-content__container')]//div[contains(@class,'grid-12 grid-row')]//div[3]//div[2]").should('contain', 'This field is required');
    cy.get(
      "(//div[contains(@class,'as-a-text as-a-text--negative as-a-text--s')][normalize-space()='This field is required.'])[2]"
    ).should("contain", "This field is required.");
    cy.get(
      "(//div[contains(@class,'as-a-text as-a-text--negative as-a-text--s')][normalize-space()='This field is required.'])[3]"
    ).should("contain", "This field is required.");
    cy.get(
      "(//div[contains(@class,'as-a-text as-a-text--negative as-a-text--s')][normalize-space()='This field is required.'])[4]"
    ).should("contain", "This field is required.");
  });

  it('Should allow a new registration if data are correct', () => {

    const email = `test${Math.floor(Math.random() * 1e2)}@email.com`;

    cy.get("#email").type(email);
    cy.get("[#password").type("Password123!");
    cy.get("#passwordConfirmation").type("Password123!");

    cy.get("select[name='title']").select('Mr');
    cy.get("#field-M").check();
    cy.get("#firstName").type("Bart");
    cy.get("#lastName").type("Simpson");
    cy.get("button[data-qa='create_button']").click();
    cy.url().should('include', '/success');
    cy.get('.success-message').should('contain', 'Account created successfully');
  });
});

    
  });

