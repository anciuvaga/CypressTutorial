describe('Alert and Confirm Popups Demo', () => {
    it.skip('should understand now to handle alert pop-up', () => {
        cy.visit('https://www.letskodeit.com/practice')

        cy.get('#alertbtn').click()

        cy.on('window:alert', alertText => {
           expect(alertText).to.equal('Hello , share this practice page and share your knowledge')     
        })
    })

    it.skip('should understand how to handle confirm popup accept', () => {
        cy.visit('https://www.letskodeit.com/practice')
        cy.get('#confirmbtn').click()
        cy.on('window:confirm', confirmText => {
            expect(confirmText).to.equal('Hello , Are you sure you want to confirm?')
            return true
         })

         // cy.on('window:confirm', () => true)

    })

    it('should understand how to handle confirm popup cancel', () => {
        cy.visit('https://www.letskodeit.com/practice')

        cy.get('#confirmbtn').click()

        cy.on('window:confirm', confirmText => {
            expect(confirmText).to.equal('Hello , Are you sure you want to confirm?')
            return false;
        })

    })
})