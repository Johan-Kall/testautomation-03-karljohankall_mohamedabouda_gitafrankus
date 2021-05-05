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

        cy.get('.user > .btn').click()
        cy.get('h2').should("contain", "Login")
    })
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
