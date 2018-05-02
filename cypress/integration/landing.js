describe('Header Text', () => {
  beforeEach(() => {
    cy.server();
    cy.visit('http://localhost:3000/');
  });

  it('Should contain appropriate header text', () => {
    cy.get('.heading-owners').contains('Owners');
  });

  it('Should contain appropriate header text', () => {
    cy.get('.heading-residents').contains('Residents');
  });

  it('Should have a clickable owner login button', () => {
    cy.get('.Landing_link--owner').click();
  });

  it('Should have a clickable resident login button', () => {
    cy.get('.Landing_link--resident').click();
  });

  it('Should display appropriate text after clicking on the owner button', () => {
    cy
      .get('.Landing_link--owner')
      .click()
      .get('div')
      .contains('This is the owner login page.');
  });

  it('Should display appropriate text after clicking on the resident button', () => {
    cy
      .get('.Landing_link--resident')
      .click()
      .get('div')
      .contains('This is the Resident login page.');
  });
});
