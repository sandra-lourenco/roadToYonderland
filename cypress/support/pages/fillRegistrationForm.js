Cypress.Commands.add("fillRegistrationForm", () => {
  cy.goToRegistrationPage();
  const email = `bart_test${Math.floor(Math.random() * 1e3)}@gmail.com`;

  cy.get("[id='email']").type(email);
  cy.get("body").click()
  cy.get('[class="as-t-box margin-bottom-mobile-2"]')
    .find("button")
    .contains("Ignore")
    .click();

  cy.get("[id='password']").type("Password123!");
  cy.get("[id='passwordConfirmation']").type("Password123!");
  cy.get("select[name='title']").select("Mr");
  cy.get("#field-M").check();
  cy.get("#firstName").type("Bart");
  cy.get("#lastName").type("Simpson");
});