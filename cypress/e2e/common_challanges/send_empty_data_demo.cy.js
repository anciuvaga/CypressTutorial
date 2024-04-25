describe('Providing empty data to input fiel', () => {
    it('should not login to app using empty username', () => {
        cy.visit('https://www.letskodeit.com/login')
        cy.get('#email').type('{backspace}')
        cy.get('#login').click()
    })
})