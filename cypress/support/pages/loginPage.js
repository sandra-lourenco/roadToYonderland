class LoginPage {
  visit() {
    cy.visit("/");
  }

  acceptCookies() {
    cy.get('[class="as-m-popover__content--modal"] #accept-all-cookies').click();
  }

  openLoginPage() {
    cy.get("#auth-popup-button").click();
    cy.get("button[id='auth-popup-button'] span[class='as-a-btn__text']").should("be.visible");
  }

  enterEmail(email) {
    cy.get("[id='email']").type(email);
  }

  enterPassword(password) {
    cy.get("[id='Password']").type(password);
  }

  submit() {
    cy.get("button[class='as-a-btn as-a-btn--fill']").click();
  }

  verifyDashboard() {
    cy.wait(3000);
    cy.get("button[id='auth-popup-button'] span[class='as-a-btn__text']").should("be.visible").click();
    cy.get("div[class='as-m-popover as-m-popover--bottom-left as-m-popover--medium as-m-popover--animated'] a:nth-child(3) span:nth-child(1)").click();
    cy.url().should("include", "/overview");
    cy.get(".as-m-group > .as-a-heading").should("be.visible");
    cy.get("body").contains("Sandra Lourenço").should("exist");
    cy.get("body").contains("My account details").should("exist");
  }
}

export default LoginPage;
