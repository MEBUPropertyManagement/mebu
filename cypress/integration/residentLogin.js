describe('Resident Login', () => {
  it('Should have a clickable resident login button', () => {
    cy
      .visit('http://localhost:3000/')
      .get('.Landing_link--resident')
      .click();
  });

  it('Should have an input for an email address', () => {
    cy.get('input').should('have.class', 'ResidentLogin__input--email');
  });

  it('Should have an input for a password', () => {
    cy.get('input').should('have.class', 'ResidentLogin__input--password');
  });

  it('Should accept input into the email address field', () => {
    cy.get('.ResidentLogin__input--email').type('christoph@chriswf.co');
  });

  it('Should have its value updated with the user input', () => {
    cy.get('.ResidentLogin__input--email').should('have.value', 'christoph@chriswf.co');
  });

  it('Should accept input into the password field', () => {
    cy.get('.ResidentLogin__input--password').type('potatoes');
  });

  it('Should have its value updated with the user input', () => {
    cy.get('.ResidentLogin__input--password').should('have.value', 'potatoes');
  });

  it('Should submit the form when the login button is clicked', () => {
    cy.get('.ResidentLogin__submit').click();
  });

  // it('Should redirect to a page with a display class', () => {
  //   cy.get('Properties');
  // });
});
