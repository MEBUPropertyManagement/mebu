describe('Header Text', () => {
  it('Should have a clickable resident login button', () => {
    cy
      .visit('http://localhost:3001/')
      .get('.Landing_link--resident')
      .click();
  });

  it('Should have an input for an email address', () => {
    cy.get('input').should('have.class', XXX);
  });

  it('Should have an input for a password', () => {
    cy.get('input').should('have.class', XXX);
  });

  it('Should accept input into the email address field', () => {
    cy.get(XXX).type('aa@aa.com');
  });

  it('Should have its value updated with the user input', () => {
    cy.get(XXX).should('have.value', 'aa@aa.com');
  });

  it('Should accept input into the password field', () => {
    cy.get(XXX).type('tailopez');
  });

  it('Should have its value updated with the user input', () => {
    cy.get(XXX).should('have.value', 'tailopez');
  });

  it('Should submit the form when the login button is clicked', () => {
    cy.get(XXX).click();
  });

  // it('Should redirect to a page with a display class', () => {
  //   cy.get('Properties');
  // });
});
