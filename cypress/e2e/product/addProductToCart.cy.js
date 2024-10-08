/// <reference types="cypress" />
import CartPage from "../../support/pages/cartPage";
import ProductPage from "../../support/pages/productPage";

describe("Registered user should be able to add products to the cart", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(3000);
  });

  it("From the search results, select a product", () => {
    cy.login();
    ProductPage.searchProduct("shirts");
    ProductPage.selectFirstProduct();
  });

  it("Add the product to the shopping cart", () => {
    cy.login();
    ProductPage.searchProduct("shirts");
    ProductPage.selectFirstProduct();
    CartPage.selectSize();
    CartPage.addToCart();
    CartPage.verifyProductAdded();
    CartPage.removeProduct();
  });

  it("Verify that the product appears in the cart", () => {
    cy.login();
    ProductPage.searchProduct("shirts");
    ProductPage.selectFirstProduct();
    CartPage.selectSize();
    CartPage.addToCart();
    CartPage.goToCart();
    CartPage.removeProduct();
  });
});
