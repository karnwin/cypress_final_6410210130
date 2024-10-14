const testDatalogin = require("../fixtures/login1.json")

import loginPage from "../support/page_object/loginPage1.js"
import checkmenu from "../support/page_object/menutest.js"

describe('cypress_final1', () => {
    beforeEach(() => {
        cy.visit('https://petstore.octoperf.com/actions/Account.action?fbclid=IwY2xjawF5oBNleHRuA2FlbQIxMAABHdh8L6C_4loxOoImDMPOrwv-l5vqj958HqQLBdKcnU_XpWG1SZD-gEsyOw_aem_5h5pVLMebHuQM_k8_a5liQ')
        })
    it('tc-01-login_sucess', () => {
        cy.login1(testDatalogin.username.positive ,testDatalogin.password.positive)
        loginPage.verifyLoginSucess()
    })
    it('tc-02-login_error', () => {
        cy.login1(testDatalogin.username.negative, testDatalogin.password.negative);
        loginPage.verifyLoginError()
    })
    it('tc-03-test_menuFish_click', () => {
        cy.login1(testDatalogin.username.positive ,testDatalogin.password.positive)
        loginPage.verifyLoginSucess()
        cy.get('#QuickLinks > [href="/actions/Catalog.action?viewCategory=&categoryId=FISH"] > img').click()
        checkmenu.verifyfish()
    })
    it('tc-04-test_menuDogs_click', () => {
        cy.login1(testDatalogin.username.positive ,testDatalogin.password.positive)
        loginPage.verifyLoginSucess()
        cy.get('#SidebarContent > [href="/actions/Catalog.action?viewCategory=&categoryId=DOGS"] > img').click()
        checkmenu.verifyDogs()
    })
    it('tc-05-test_menuCats_click', () => {
        cy.login1(testDatalogin.username.positive ,testDatalogin.password.positive)
        loginPage.verifyLoginSucess()
        cy.get('#SidebarContent > [href="/actions/Catalog.action?viewCategory=&categoryId=CATS"] > img').click()
        checkmenu.verifyCats()
    })
    it('tc-06-test_menuReptiles_click', () => {
        cy.login1(testDatalogin.username.positive ,testDatalogin.password.positive)
        loginPage.verifyLoginSucess()
        cy.get('#SidebarContent > [href="/actions/Catalog.action?viewCategory=&categoryId=REPTILES"] > img').click()
        checkmenu.verifyReptiles()
    })
    it('tc-07-test_menuBirds_click', () => {
        cy.login1(testDatalogin.username.positive ,testDatalogin.password.positive)
        loginPage.verifyLoginSucess()
        cy.get('#SidebarContent > [href="/actions/Catalog.action?viewCategory=&categoryId=BIRDS"] > img').click()
        checkmenu.verifyBirds()
    })
    it('tc-07-test_menu to return', () => {
        cy.login1(testDatalogin.username.positive ,testDatalogin.password.positive)
        loginPage.verifyLoginSucess()
        cy.get('#SidebarContent > [href="/actions/Catalog.action?viewCategory=&categoryId=BIRDS"] > img').click()
        cy.get('#BackLink > a').click()
    })
    it('tc-08-logo_img_check', () => {
        cy.login1(testDatalogin.username.positive ,testDatalogin.password.positive)
        loginPage.verifyLoginSucess()
        cy.get('#LogoContent > a > img').should('have.prop', 'tagName', 'IMG')
    })
    it('tc-09-serch_check', () => {
        cy.login1(testDatalogin.username.positive ,testDatalogin.password.positive)
        loginPage.verifyLoginSucess()
        cy.get('[size="14"]').type('Manx')
        cy.get('[name="searchProducts"]').click();
        cy.get('tbody > :nth-child(2) > :nth-child(3)').should('have.text', 'Manx')
    })
    it('tc-09-Shopping_Cart_check', () => {
        cy.login1(testDatalogin.username.positive ,testDatalogin.password.positive)
        loginPage.verifyLoginSucess()
        cy.get('[href="/actions/Cart.action?viewCart="] > img').click()
        cy.get('td > b').should('have.text', 'Your cart is empty.')
    })
    it('tc-09-My_Account_check', () => {
        cy.login1(testDatalogin.username.positive ,testDatalogin.password.positive)
        loginPage.verifyLoginSucess()
        cy.get('[href="/actions/Account.action?editAccountForm="]').click()
        cy.get(':nth-child(2) > tbody > :nth-child(1) > :nth-child(2)').should('have.text', 'j2ee')
    })
    it('tc-10-hosted_by_url_check', () => {
        cy.login1(testDatalogin.username.positive ,testDatalogin.password.positive)
        loginPage.verifyLoginSucess()
        cy.get('#PoweredBy > [href="https://octoperf.com"]').should('have.attr', 'href', 'https://octoperf.com');
    })
    it('tc-11-Powered_by_url_check', () => {
        cy.login1(testDatalogin.username.positive ,testDatalogin.password.positive)
        loginPage.verifyLoginSucess()
        cy.get('[href="https://mybatis.org/"]').should('have.attr', 'href', 'https://mybatis.org/');
    })
    it.only('tc-12-?_check', () => {
        cy.login1(testDatalogin.username.positive ,testDatalogin.password.positive)
        loginPage.verifyLoginSucess()
        cy.get('[href="../help.html"]').click()
        cy.get('h1').should('have.text', 'JPetStore Demo')
    })
})