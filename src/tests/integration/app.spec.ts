/// <reference types="Cypress" />

import { COMPANIES, MIN_CHARS, MOVES, NOT_FOUND_TEXT, NOT_FOUND_TITLE, REGIONS, SEARCH, SEARCH_HERE, THANKS, WELCOME } from '../../constants';
import { API_SERVER } from './../../api/endpoints';

describe('Changing Languages', () => {
  before(() => {
    cy.visit('/');
  });

  it('should load the app', () => {
    cy.get('[data-test-id="logo"]').should('have.text', 'TALNT');
  });

  it('should display all dropdowns disabled until they receive data', () => {
    cy.get(`[data-test-id="dropdown_${MOVES}"]`).should('have.have.attr', 'disabled');
    cy.get(`[data-test-id="dropdown_${COMPANIES}"]`).should('have.have.attr', 'disabled');
    cy.get(`[data-test-id="dropdown_${REGIONS}"]`).should('have.have.attr', 'disabled');
   });

  it('should display options when Region dropdown is clicked; if no options are available the dropdown should be disabled', () => {
    cy.get(`[data-test-id="first-option_${REGIONS}"]`).should('exist');
    cy.get(`[data-test-id="dropdown_${REGIONS}"]`).children().its('length').then(length => {
      if (length >= 2) {
        cy.get(`[data-test-id="dropdown_${MOVES}"]`).should('not.have.have.attr', 'disabled');
        cy.get(`[data-test-id="options_${REGIONS}"]`).eq(1).invoke('val').then(value => {
          cy.get(`[data-test-id="dropdown_${REGIONS}"]`).select(value as string).invoke('val').should('eq', value);
        });
      } else {
        cy.get(`[data-test-id="dropdown_${REGIONS}"]`).should('have.have.attr', 'disabled');
      }
    });
   });

  it('should display options when Companies dropdown is clicked; if no options are available the dropdown should be disabled', () => {
    cy.get(`[data-test-id="first-option_${COMPANIES}"]`).should('exist');
    cy.get(`[data-test-id="dropdown_${COMPANIES}"]`).children().its('length').then(length => {
      if (length >= 2) {
        cy.get(`[data-test-id="options_${COMPANIES}"]`).eq(1).invoke('val').then(value => {
          cy.get(`[data-test-id="dropdown_${COMPANIES}"]`).select(value as string).invoke('val').should('eq', value);
        });
      } else {
        cy.get(`[data-test-id="dropdown_${COMPANIES}"]`).should('have.have.attr', 'disabled');
      }
    });
   });

  it('should display options when Moves dropdown is clicked; if no options are available the dropdown should be disabled', () => {
    cy.get(`[data-test-id="first-option_${MOVES}"]`).should('exist');
    cy.get(`[data-test-id="dropdown_${MOVES}"]`).children().its('length').then(length => {
      if (length >= 2) {
        cy.get(`[data-test-id="options_${MOVES}"]`).eq(1).invoke('val').then(value => {
          cy.get(`[data-test-id="dropdown_${MOVES}"]`).select(value as string).invoke('val').should('eq', value);
        });
      } else {
        cy.get(`[data-test-id="dropdown_${MOVES}"]`).should('have.have.attr', 'disabled');
      }
    });
  });

  it('Should display a welcome article if AJAX calls work fine', () => {
    cy.get('[data-test-id="article-title"]').should('have.text', WELCOME);
    cy.get('[data-test-id="article-text"]').should('have.text', THANKS);
   });

  it('should have a search area', () => {
    cy.get('[data-test-id="search-wrapper"]').should('exist');
    cy.get('[data-test-id="search-title"]').should('have.text', SEARCH);
  });

  it('should have a search input with placeholder "search here"', () => {
    cy.get('[data-test-id="search-input"]').should('have.attr', 'placeholder', SEARCH_HERE);
  });

  it('should display a label when input is focused or receive any text', () => {
    cy.get('[data-test-id="search-input"]').should('have.value', '');
    cy.get('[data-test-id="search-label"]').should('not.exist');
    cy.get('[data-test-id="search-input"]').click();
    cy.get('[data-test-id="search-label"]').should('exist');
    cy.get('[data-test-id="search-title"]').click();
    cy.get('[data-test-id="search-label"]').should('not.exist');
    cy.get('[data-test-id="search-input"]').type('A');
    cy.get('[data-test-id="search-label"]').should('exist');
   });

  it('should display a min character warning on label if text has less than 2 characters', () => {
    cy.get('[data-test-id="search-input"]').invoke('val').should('have.length', 1);
    cy.get('[data-test-id="search-label"]').should('have.text', MIN_CHARS);
    cy.get('[data-test-id="search-input"]').type('n', { delay: 500 });
    cy.get('[data-test-id="search-label"]').should('have.text', SEARCH_HERE);
    cy.get('[data-test-id="search-input"]').clear();
   });

  it('should search and update articles when input has two or more letters', () => {
    // cy.get('[data-test-id="article-title"]').should('have.text', WELCOME);
    cy.get('[data-test-id="search-input"]').type('An', { delay: 50 });
    cy.get(`[data-test-id="article-text"]`).its('length').then(length => {
      if (length > 1) {
        cy.get('[data-test-id="article-text"]').should('include.text', 'An');
      }
    });
    cy.get('[data-test-id="search-input"]').type('d', { delay: 50 });
    cy.get(`[data-test-id="article-text"]`).its('length').then(length => {
      if (length > 1) {
        cy.get('[data-test-id="article-text"]').should('include.text', 'And');
      }
    });
    cy.get('[data-test-id="search-input"]').clear().type('Br', { delay: 50 });
    cy.get(`[data-test-id="article-text"]`).its('length').then(length => {
      if (length > 1) {
        cy.get('[data-test-id="article-text"]').should('include.text', 'Br');
        cy.get('[data-test-id="article-text"]').should('not.include.text', 'WSDRFTZW');
      }
    });
    cy.get('[data-test-id="search-input"]').type('a', { delay: 50 });
    cy.get(`[data-test-id="article-text"]`).its('length').then(length => {
      if (length > 1) {
        cy.get('[data-test-id="article-text"]').should('include.text', 'Bra');
      }
    });
    cy.get('[data-test-id="search-input"]').clear().type('Co', { delay: 50 });
    cy.get(`[data-test-id="article-text"]`).its('length').then(length => {
      if (length > 1) {
        cy.get('[data-test-id="article-text"]').should('include.text', 'Co');
      }
    });
    cy.get('[data-test-id="search-input"]').type('mp');
    cy.get(`[data-test-id="article-text"]`).its('length').then(length => {
      if (length > 1) {
        cy.get('[data-test-id="article-text"]').should('include.text', 'Comp');
        cy.get('[data-test-id="article-text"]').should('not.include.text', 'WSHTRRKÑWESSDRFTZW');
      }
    });
   });

  it('should display a sorry message on Main section if input string is not found', () => {
    cy.get('[data-test-id="search-input"]').type('WSHTRRKÑWESSDRFTZW', { delay: 50 });
    cy.get('[data-test-id="article-text"]').should('not.include.text', 'WSHTRRKÑWESSDRFTZW');
    cy.get(`[data-test-id="article-text"]`).should('have.length', 1);
    cy.get('[data-test-id="article-title"]').should('have.text', NOT_FOUND_TITLE);
    cy.get('[data-test-id="article-text"]').should('have.text', NOT_FOUND_TEXT);
  });

  it('should display the welcome message back when input text has less than 2 characters', () => {
    cy.get('[data-test-id="search-input"]').clear().type('Br', { delay: 50 });
    cy.get('[data-test-id="article-title"]').should('not.have.text', WELCOME);
    cy.get('[data-test-id="search-input"]').clear();
    cy.wait(500);
    cy.get('[data-test-id="article-title"]').should('have.text', WELCOME);
   });


  it('should not break app if search action fails on server', () => {
    cy.intercept(`${API_SERVER}/**`, {
      forceNetworkError: true
    });
    cy.visit('/');
    cy.get('[data-test-id="article-title"]').should('have.text', WELCOME);
    cy.get(`[data-test-id="dropdown_${MOVES}"]`).should('have.have.attr', 'disabled');
    cy.get(`[data-test-id="dropdown_${COMPANIES}"]`).should('have.have.attr', 'disabled');
    cy.get(`[data-test-id="dropdown_${REGIONS}"]`).should('have.have.attr', 'disabled');
    cy.get('[data-test-id="search-input"]').clear().type('TALNT', { delay: 50 });
  });
});
