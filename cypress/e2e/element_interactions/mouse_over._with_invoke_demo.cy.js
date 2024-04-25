describe('Invoke Demo', () => {
    it('should understand various options of mouse over and click an option', () => {
        cy.visit('https://www.letskodeit.com/practice')

        // cy.get('#mousehover').invoke('show') -> .invoke() to call jquery show function.
        // but does not work should use instead direct parent of the element you want to show on hover over
        cy.get('div[class="mouse-hover-content"]').invoke('show')
        cy.get('div.mouse-hover-content a[href="#top"]').click()

    })
} ) 