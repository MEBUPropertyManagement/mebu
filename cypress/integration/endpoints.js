describe('Owner Login (Success and Failure)', () => {
  it('Should return authenticated: true with valid login credentials:', () => {
    cy
      .request('POST', 'http://localhost:3001/users/owner-login', {
        email: 'aa@aa.com',
        password: 'kkz8gp',
      })
      .then((response) => {
        expect(response.body).to.have.property('authenticated', true);
      });

    // indicates whether a session is successfully created
    cy.getCookie('connect.sid').should('exist');
  });

  it('Should return authenticated: false with invalid login credentials:', () => {
    cy
      .request('POST', 'http://localhost:3001/users/owner-login', {
        email: 'aaaa@aa.com',
        password: 'tailopez',
      })
      .then((response) => {
        expect(response.body).to.have.property('authenticated', false);
      });
  });
});

describe('Retrieve Billing History', () => {
  it('Should log the user in and return their billing history', () => {
    cy
      .request('POST', 'http://localhost:3001/users/resident-login', {
        email: 'aa@aa.com',
        password: 'tailopez',
      })
      .then((response) => {
        expect(response.body).to.have.property('authenticated', true);
      });

    // indicates whether a session is successfully created
    cy.getCookie('connect.sid').should('exist');

    cy.request('GET', 'http://localhost:3001/bills/getBillingHistory').then((response) => {
      expect(response.body).to.have.property('history');
    });
  });
});

describe('Retrieve Unpaid Bills', () => {
  it('Should log the user in and return their billing history', () => {
    cy
      .request('POST', 'http://localhost:3001/users/resident-login', {
        email: 'aa@aa.com',
        password: 'tailopez',
      })
      .then((response) => {
        expect(response.body).to.have.property('authenticated', true);
      });

    // indicates whether a session is successfully created
    cy.getCookie('connect.sid').should('exist');

    cy.request('GET', 'http://localhost:3001/bills/getUnpaid').then((response) => {
      expect(response.body).to.have.property('bills');
    });
  });
});
