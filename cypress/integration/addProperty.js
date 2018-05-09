describe('Add Property', () => {
  it('Should have a clickable owner login button', () => {
    cy
      .visit('http://localhost:3000/')
      .get('.Landing_link--owner')
      .click();
  });

  it('Should input an email address', () => {
    cy.get('.OwnerLogin__input--email').type('aa@aa.com');
  });

  it('Should input a password', () => {
    cy.get('.OwnerLogin__input--password').type('kkz8gp');
  });

  it('Should submit the form', () => {
    cy.get('.OwnerLogin__submit').click();
  });

  it('Should redirect to a page with a property display class', () => {
    cy.get('.Properties');
  });

  // Now that we're logged in, head to the add property page.

  // it('Should visit the add property page', () => {
  //   cy.visit('http://localhost:3000/owner/properties/new');
  // });

  it('Should have an add property button', () => {
    cy.get('.Properties__button').click();
  });

  it('Should have an input for a name', () => {
    cy.get('input').should('have.class', 'AddProperty__input--name');
  });

  it('Should have an input for an address', () => {
    cy.get('input').should('have.class', 'AddProperty__input--address');
  });

  it('Should have an input for a value', () => {
    cy.get('input').should('have.class', 'AddProperty__input--value');
  });

  it('Should have an input for a photo URL', () => {
    cy.get('input').should('have.class', 'AddProperty__input--photourl');
  });

  it('Should have an input for a number of units', () => {
    cy.get('input').should('have.class', 'AddProperty__input--units');
  });

  it('Should have an input for an expenses value', () => {
    cy.get('input').should('have.class', 'AddProperty__input--expenses');
  });

  it('Should have a submit button', () => {
    cy.get('button').should('have.class', 'AddProperty__button');
  });

  // Put text into the input fields:

  it('Should accept input into the name field', () => {
    cy.get('.AddProperty__input--name').type('Casa de Samson');
  });

  it('Should accept input into the address field', () => {
    cy.get('.AddProperty__input--address').type('500 S. Ervay St.');
  });

  it('Should accept input into the value field', () => {
    cy.get('.AddProperty__input--value').type('500000');
  });

  it('Should accept input into the photo URL field', () => {
    cy
      .get('.AddProperty__input--photourl')
      .type('https://images.unsplash.com/photo-1513709630908-2fbc54f82fcb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=684f04c3636ab921b21912a85e4fd46a&auto=format&fit=crop&w=934&q=80');
  });

  it('Should accept input into the number of units field', () => {
    cy.get('.AddProperty__input--units').type('5');
  });

  it('Should accept input into the expenses field', () => {
    cy.get('.AddProperty__input--expenses').type('150');
  });

  it('Should submit the form when the login button is clicked', () => {
    cy.get('.AddProperty__button').click();
  });
});
