/// <reference types="Cypress" />
export { };

describe('Changing Languages', () => {
  before(() => {
    cy.visit('/');
  });

  it('mounts correctly', () => {
    cy.contains('App');
  });
});
