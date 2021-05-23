/// <reference types="Cypress" />
export {};

describe('Changing Languages', () => {
  before(() => {
    cy.visit('/');
  });

  it('should load the app', () => {
    cy.get('[data-test-id="logo"]').should('have.text', 'TALNT');
  });

  xit('Should display more than one option when Region dropdown is clicked', () => { });

  xit('should display more than one option when Sectors dropdown is clicked', () => { });

  xit('Should display more than one option when Menu button is clicked', () => { });

  xit('should not break the app and disable all dropdowns if AJAX calls fail', () => { });

  xit('should display a sorry message if AJAX calls fail', () => { });

  xit('Should display a welcome article if AJAX calls work fine', () => { });

  xit('should have a search input and a initially disabled search button', () => { });

  xit('should enable the search button when a text of 3 characters or more is inserted on the search input', () => { });

  xit('should update articles when input has a valid content and search button is clicked', () => { });

  xit('should update articles when input text is changed and search button is clicked again', () => { });

  xit('should display a sorry message on Main section if input string is not found', () => { });

  xit('should not break app if search action fails on server', () => {});
});
