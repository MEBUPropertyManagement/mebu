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
    cy.get('.ResidentLogin__input--email').type('aa@aa.com');
  });

  it('Should have its value updated with the user input', () => {
    cy.get('.ResidentLogin__input--email').should('have.value', 'aa@aa.com');
  });

  it('Should accept input into the password field', () => {
    cy.get('.ResidentLogin__input--password').type('tailopez');
  });

  it('Should have its value updated with the user input', () => {
    cy.get('.ResidentLogin__input--password').should('have.value', 'tailopez');
  });

  it('Should submit the form when the login button is clicked', () => {
    cy.get('.ResidentLogin__submit').click();
  });
});
