describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have the correct title', () => {
    cy.title().should('include', 'Home | React App');
  });
});
