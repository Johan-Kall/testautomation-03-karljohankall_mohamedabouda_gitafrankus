/// <reference types="cypress" />

import * as targets from '../targets/targets'


describe('Assignment 03', function(){
    it('Login', function () {

        cy.visit(targets.base_url)
        cy.get('h2').should("contain", "Login")

        cy.get(':nth-child(1) > input').type(targets.username)
        cy.get(':nth-child(2) > input').type(targets.password)
        cy.get('.btn').click();
        cy.get('.username').should("contain", "Welcome tester01!")
        cy.get('h2').should("contain", "Tester Hotel Overview")

        cy.get('.blocks > :nth-child(1) > .btn').click()

    cy.get('h2 > div').should("contain", "Rooms")

        cy.get('.user > .btn').click()
        cy.get('h2').should("contain", "Login")
    })

    it("Create Client", () => {
        cy.visit("http://localhost:3000")
        cy.title().should('eq','Testers Hotel')
        cy.contains('Login')
        cy.log('Asserted that the login string/label exists on this specific page')
        cy.get(':nth-child(1) > input').type ('tester01')
        cy.get(':nth-child(2) > input').type ('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Welcome')
        cy.get('.blocks > :nth-child(2) > .btn').click()
        cy.contains('Clients')
        cy.get('h2 > .btn').click()
        cy.contains('New Client')
        cy.get(':nth-child(1) > input').type ('Johan')
        cy.get(':nth-child(2) > input').type ('Berg@gmail.com')
        cy.get(':nth-child(3) > input').type ('0734582738')
        cy.get('.blue').click()
        cy.contains('Clients')
        cy.get('.user > .btn ').click()
        cy.contains('Login')

    });
})

function performLogin(cy){
    cy.get(':nth-child(1) > input').type(targets/username)
    cy.get(':nth-child(2) > input').type(targets/password)
    cy.get('.btn').click()
    cy.contains('Login')
}


module.exports = {
    performLogin
}
