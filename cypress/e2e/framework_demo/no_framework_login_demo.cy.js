describe('No Framework Test Suite', () => {
    
    it.skip('should login to app using valid credentials', () => {
        cy.visit('https://www.letskodeit.com/login')
        cy.login('ciuvagaandrei@gmail.com', 'andreiplaton1@')
        cy.get('#dropdownMenu1').click()
        cy.contains('Logout').click()
    })

    it('should not login to app using empty username', () => {
        cy.visit('https://www.letskodeit.com/login')
        cy.get('#email').type('{backspace}')
        cy.get('#login-password').type('abc')
        cy.get('#login').click()
        cy.get('div[class="form-group"] span[class="error"]').should('have.text', 'The email field is required.')
    })

    it('should not login to app using invalid username/password combination', () => {
        cy.visit('https://www.letskodeit.com/login')
        cy.get('#email').type('email')
        cy.get('#login-password').type('password')
        cy.get('#login').click()
        cy.get('#incorrectdetails').should('have.text', 'Incorrect login details. Please try again.')
    })
}) 