class RegistrationPage {
  navigateToRegistration() {
    cy.get('[class="as-m-popover__content--modal"] #accept-all-cookies').click();
    cy.get("#auth-popup-button").click();
    cy.get('[data-qa="register_link"]').click();
    cy.url().should("include", "/registration-page");
  }

  fillForm(email, password, firstName, lastName) {
    cy.get("[id='email']").type(email);
    cy.get("body").click();
    cy.get('[class="as-t-box margin-bottom-mobile-2"]').find("button").contains("Ignore").click();

    cy.get("[id='password']").type(password);
    cy.get("[id='passwordConfirmation']").type(password);
    cy.get("select[name='title']").select("Mr");
    cy.get("#field-M").check();
    cy.get("#firstName").type(firstName);
    cy.get("#lastName").type(lastName);
  }

  submitForm() {
    cy.get("button[data-qa='create_button']").click();
  }

  verifyRegistrationSuccess() {
    cy.url().should("include", "/registration-confirmation");
    cy.contains("WE'RE SO HAPPY YOU'RE HERE.");
    cy.get("[title='Update Account Preferences']").click();
    cy.url().should("include", "/preferences");
    cy.get(".as-m-account-menu > :nth-child(2) > .as-a-btn > .as-a-btn__text").should("exist");
  }
}

export default new RegistrationPage();
