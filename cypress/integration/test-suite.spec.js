/// <reference types="cypress" />

import * as targets from '../targets/targets'

describe('Assignment 03', function(){
    it('Perform Valid login', function(){
        cy.visit(targets.base_url)
        cy.performLogin(cy)
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