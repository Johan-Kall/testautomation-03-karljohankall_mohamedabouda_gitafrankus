
describe('Login Logout', function () {

    it('Login', function () {

        cy.visit(base_url)
        cy.get('h2').should("contain", "Login")

        cy.get(':nth-child(1) > input').type("username")
        cy.get(':nth-child(2) > input').type("password")
        cy.get('.btn').click();
        cy.get('.username').should("contain", "Welcome tester01!")
        cy.get('h2').should("contain", "Tester Hotel Overview")

        cy.get('.user > .btn').click()
        cy.get('h2').should("contain", "Login")


    })

})


