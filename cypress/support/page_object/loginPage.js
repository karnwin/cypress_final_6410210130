class loginPage {
    get loginSucess() {
      return cy.get('.subheader');
    }
    // Action
    verifyLoginSucess() {
      this.loginSucess.should('have.text', 'Welcome to the Secure Area. When you are done click logout below.');
    }
    get loginError() {
      return cy.get('h2')
    }
    // Action
    verifyLoginError() {
      this.loginError.should('have.text', 'Login Page');
    }
  }
  export default new loginPage();