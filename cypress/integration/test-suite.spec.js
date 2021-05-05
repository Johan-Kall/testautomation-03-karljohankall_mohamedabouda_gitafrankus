/// <reference types="cypress" />

describe("Second test", () => {
    it("Test case 2", () => {
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
});