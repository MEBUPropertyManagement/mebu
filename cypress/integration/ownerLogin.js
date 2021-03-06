describe('Owner Login', () => {
  it('Should have a clickable owner login button', () => {
    cy
      .visit('http://localhost:3000/')
      .get('.Landing_link--owner')
      .click();
  });

  it('Should have an input for an email address', () => {
    cy.get('input').should('have.class', 'OwnerLogin__input--email');
  });

  it('Should have an input for a password', () => {
    cy.get('input').should('have.class', 'OwnerLogin__input--password');
  });

  it('Should accept input into the email address field', () => {
    cy.get('.OwnerLogin__input--email').type('aa@aa.com');
  });

  it('Should accept input into the password field', () => {
    cy.get('.OwnerLogin__input--password').type('kkz8gp');
  });

  it('Should submit the form when the login button is clicked', () => {
    cy.get('.OwnerLogin__submit').click();
  });
});
