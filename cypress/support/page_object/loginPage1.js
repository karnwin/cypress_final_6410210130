class loginPage {
    get loginSucess() {
      return cy.get('[href="/actions/Account.action?editAccountForm="]')
    }
    // Action
    verifyLoginSucess() {
      this.loginSucess.should('have.text', 'My Account');
    }
    get loginError() {
      return cy.get('#Catalog > form > :nth-child(1)')
    }
    // Action
    verifyLoginError() {
      this.loginError.should('have.text', 'Please enter your username and password.');
    }
  }
  export default new loginPage();