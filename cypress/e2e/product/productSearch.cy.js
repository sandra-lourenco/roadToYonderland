/// <reference types="cypress" />
import ProductPage from "../../support/pages/productPage";

describe("Product Search and Selection on cotswoldoutdoor website", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(3000);
  });

  it("Search for a product using the search bar", () => {
    cy.login();
    const productName = "shirts";
    ProductPage.searchProduct(productName);
  });

  it("Verify that the search results match the query", () => {
    cy.login();
    const productName = "shirts";
    ProductPage.searchProduct(productName);
    ProductPage.validateSearch();
  });
});
