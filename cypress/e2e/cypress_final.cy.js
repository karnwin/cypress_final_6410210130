const testDatalogin = require("../fixtures/login.json")

import loginPage from "../support/page_object/loginPage.js"

describe('cypress_final', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/login')
        })
    it('tc-01-login&logout', () => {
        cy.login(testDatalogin.username.positive ,testDatalogin.password.positive)
        loginPage.verifyLoginSucess()
        cy.get('.button').click();
    })
    it('tc-02-login_error', () => {
        cy.login(testDatalogin.username.negative, testDatalogin.password.negative);
        loginPage.verifyLoginError();
    })
})