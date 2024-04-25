describe('Environment Variables Demo', () => {

    const cred = {
        username: Cypress.env('username'),
        password: Cypress.env('password')
    }


    it('should login to app using valid credentials', () => {
        cy.visit(Cypress.env('url') + "/login")
        cy.login(Cypress.env('username'), Cypress.env('password'))
        cy.get('#dropdownMenu1').click()
        cy.contains('Logout').click()

    })
})